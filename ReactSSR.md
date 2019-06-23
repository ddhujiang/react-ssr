# react-SSR

```
react
express
webpack-server
```

## 服务端写react组件

安装node

npm init创建npm包

安装express

创建一个http服务

```
app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

```
启动http服务器
node app.js
网页打开 localhost：3000
请求这个服务其
```

在服务器端运行react代码

```
安装react
npm i react --save
安装webpack,把react的jsx文件打包成node能识别的js文件
npm i webpack webpack-cli --save
安装bable-loader
npm i babel-loader babel-core --save
在presets里配置了react  stage-0，就要安装babel-preset-react babel-preset-env
npm i babel-preset-react --save
npm i babel-preset-stage-0 --save
npm i babel-preset-env --save
```

```
npm i webpack-node-externals --save

node的框架像express不要打包
```

```
babel-loader 不能安装最新的版本
npm i babel-loader@7.1.5
```

创建服务器端的webpack.js

```
//服务器端和浏览器端 require('path');打包出来的代码是完全不同的
const Path=require('path');
const nodeExternals=require('webpack-node-externals');
module.exports={
    target:'node',
    mode:'development',     //开发环境还是线上环境
    entry:'./src/index.js',   //入口
    output:{               //输出
        filename:'bundle.js',
        path:Path.resolve(__dirname,'build')
    },
    externals:[nodeExternals()],    //不会打包express
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{        //presets配置的都要npm安装它的依赖，列如babel-preset-react  babel-preset-env
                    presets:['react','stage-0',['env',{targets:{  //配置环境，兼容浏览器的版本
                        browsers:['last 2 versions']
                    }}]]
                }
            }
        ]
   }
};
```

```
https://stackoverflow.com/
因为版本号差异报的错，可在此网站搜索
```

webpack的自动打包

```
"build": "webpack --config webpack.server.js --watch"
--watch监听
监听入口文件，以及他的依赖文件
entry:'./src/index.js',   //入口
```

### nodemon

服务器端重启

```
修改代码后，需要重新启动 应用，所做的修改才能生效。若之后的每次代码修改都要重复这样的操作，势必会影响开发效率，本文将详细介绍Nodemon，它会监测项目中的所有文件，一旦发现文件有改动，Nodemon 会自动重启应用
npm i nodemon -g

"start":"nodemon --watch build --exec node \"./build/bundle.js\"",    //nodemon 监听build文件夹下的文件，当有文件改变就执行node ./build/bundle.js
```

### npm-run-all

```
npm i npm-run-all --save

"dev":"npm-run-all --parallel dev:**",
当npm run dev 时，会运行所有以dev开头的命令
```

### 同构

工程化代码优化

```
npm i webpack-merge --save
合并webpack 配置
```

### 同构项目中引入Redux

>客户端引入redux,服务端再同样的引入一次redux

```
npm i redux --save
npm i react-redux --save
npm i redux-thunk --save   //中间件，发异步请求
```

简单的创建一个store

```
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../Routes.jsx';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
const reducer=(state={name:'dell'},action)=>{
    return state;
};
//创建了一个store
const store=createStore(reducer);
//Provider把store传递给了路由下面的每一个组件
const App=()=>{
    return(
      <Provider store={store}>
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
      </Provider>
    )
}
//hydrate 数据的脱水和注水
ReactDom.hydrate(<App/>,document.querySelector("#root"));
```

路由组件中应用store数据

```
import  React from 'react';
import  Header from './../../components/Header.jsx';
import  {connect} from 'react-redux';

const Home=(props)=>{
    return (
        <div>
            <Header/>
            <div onClick={()=>{alert('jjjjj')}}>
                {props.name}
            </div>
        </div>
    )
};
const mapStateToProps =state=>({
    name:state.name
});
export default connect(mapStateToProps,null)(Home);
```

应用thunkh中间件

```
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const store=createStore(reducer,applyMiddleware(thunk));
```

### getStore

```
const getStore=()=>{    
//每次执行这个函数都会生成一个新的store,这样每个用户拿到的都是一个新的store
    return createStore(reducer,applyMiddleware(thunk));
};

  //每次getStore执行都会生成一个新的store,避免所用用户都用同一个store
      <Provider store={getStore()}>
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
      </Provider>
```

异步数据服务器渲染：loadData方法及路由重构

```
npm i react-router-config --save

import {matchRoutes} from 'react-router-config';
 const matchedRoutes =matchRoutes(routes,req.path);  //匹配到用户请求的路由
```

### 数据的脱水和注水

```
 数据注水，就是把服务端的store数据的存储到window.context中
 <script >
               window.context={
                   state:${JSON.stringify(store.getState())}
               }
  </script>
  数据的脱水，及第一次渲染时，服务端已经请求了数据，store里面有值，客户端不需要再次请求
```

### 中间层

```
npm i express-http-proxy --save
```

### axios

instance创建一个axios实列

### renderRoutes

多级路由

```
配置
export default [{
    path:'/',
    component:App,
    routes:[
        {
            path:'/login',
            component:Login,
            exact:true,
            key:'login'
        }
    ]
}]

展示
import  Header from './components/Header.jsx';
import {renderRoutes} from 'react-router-config';

 <div>
            每个页面都会展示的导航栏
            <Header/>
            {/*显示每个页面对应的自己内容*/}
            {renderRoutes(props.route.routes)}
 </div>
```

### context

服务器端与组件通信

服务器端路由，通过context值区分页面

```
  <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {renderRoutes(routes)}
                    {/*{routes.map(route=>(<Route {...route}/>)*/}
                    {/*)}*/}
                </div>
            </StaticRouter>
 </Provider>

componentWillMount(){
        console.log(this.props)
        if(this.props.staticContext){    
            this.props.staticContext.NOT_FOUND=true;
        }
    }
```

### 服务端css

>isomorphic-style-loader

```
npm i isomorphic-style-loader --save

module:{
        rules:[
            {
                test:/\.css?$/,
                use:['isomorphic-style-loader',{
                    loader: "css-loader",
                    options:{
                        importLoaders:1,
                        modules:true,
                        localIdentName:'[name]_[local]_[hash:base64:5]'
                    }
                }]
            }
        ]
    }
```

### 实现seo

title /description

title和description不会影响到seo排名，主要是展示网站的内容给用户看，让用户感兴趣，提高转化率。

```
   var title = '博大学城, IT互联网黄埔军校'
   var keywords = '博大学城,博大,学城,IT教育,IT培训,IT机构,学费,基础,入门,产品经理,人工智能,Web,端,Java'
   var description = '博大学城是Boolan旗下一站式就业培训机构，面向IT领域基础人群，旗舰专业涵盖产品经'

 <html>
        <head>
          <title>{title}</title>
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
          <link rel="icon" type="image/x-icon" href="https://city.boolan.com/titleIcon.png" />
          <script src="https://city.boolan.com/resource/video.min.js"></script>
        </head>
        <body>
        </body>
  </html>


```

提上排名

文字

原创（排名靠前）

多媒体

图片原创、高清（排名靠前）

超链接

网站内部链接（本网站链接到其他网站），链接的内容要和网站的内容相同

外部链接（别人的网站链接我们的网站），链接要多，越多本网站的排名越好

### React-Helmet

> 定制title和description

```
npm i react-helmet --save
```

### 预渲染

只对seo有要求，对首屏展示速度没有要求

prerender

```
npm i prerender
```







