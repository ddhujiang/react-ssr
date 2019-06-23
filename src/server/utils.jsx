import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter,Route} from  'react-router-dom';

import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import {Helmet} from 'react-helmet'





//Provider把store传递给了路由下面的每一个组件
//StaticRouter拿不到浏览器里面的路由，所以要取请求里面的地址
export const render=(req,store,routes,context)=>{
    const content= renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {renderRoutes(routes)}
                    {/*{routes.map(route=>(<Route {...route}/>)*/}
                    {/*)}*/}
                </div>
            </StaticRouter>
        </Provider>
    ));
    //服务端的title和description
    const helmet=Helmet.renderStatic();
    //服务端渲染的css
    const cssStr=context.css.length?context.css.join('\n'):'';
    return (
        `<html lang="en">
        <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${cssStr}</style>
        </head>
        <body>
           <div id="root">${content}</div>
           <script >
               window.context={
                   state:${JSON.stringify(store.getState())}
               }
           </script>
           <script  src="/index.js"></script>
         </html>`
    )
};