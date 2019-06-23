const express = require('express');
const app = express();
import React from 'react';
import {matchRoutes} from 'react-router-config';
import proxy from 'express-http-proxy';

import {render} from './utils.jsx';
import  {getStore} from '../store';
import routes from '../Routes.jsx';


app.use(express.static('public'));   //请求静态文件时，会去public文件下找

app.use('/api',proxy('http://47.95.113.63',{ //当请求接口有/api时会代理到http://47.95.113.63服务器
    proxyReqPathResolver:function (req) {
        console.log(req.url);
        return '/ssr/api'+req.url;  //返回http://47.95.113.63后面的路径
    }
}));


app.get('*', (req, res) => {
    const store=getStore(req);
    //拿到异步数据，并填充到store中
    //store里面填充什么数据，我们要根据用户的请求路由做判断
    const matchedRoutes =matchRoutes(routes,req.path);  //匹配到用户请求的路由

    //让matchRoutes里面所有的组件，对应的loadData方法执行一次
    const promises=[];
    matchedRoutes.forEach(item=>{
        if(item.route.loadData){
            // promises.push(item.route.loadData(store))
            const promise =new Promise((resolve,reject)=>{  //即使promise中有请求错误，也会添加外层正确的promise
                item.route.loadData(store).then(resolve).catch(resolve);
            });
            promises.push(promise)
        }
    });
    Promise.all(promises).then(()=>{    //所有请求都正确的时候，才会执行then方法，不然会执行catch方法
        //异步，当promises里数据都请求完毕再执行
        const context={css:[]};
        const html =render(req,store,routes,context);
        //context的值为组件内通过this.props.staticContext传递过来的
        console.log('context',context);
        if(context.action==='REPLACE'){   //服务器端重定向
            res.redirect(301,context.url)
        } else if(context.NOT_FOUND){
            res.status(404);
            res.send(html)
        }else {
            res.send(html)
        }
        // console.log(store.getState());
        // res.send(render(req,store,routes))
    }).catch(()=>{
        res.end('sorry')
    })

});
app.listen(3000, () => console.log('Example app listening on port 3000!'));

