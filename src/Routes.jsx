import React from 'react';
import {Route} from 'react-router-dom';
import App from './App.jsx';
import Home from  './containers/Home/index.jsx';
import Login from  './containers/Login/index.jsx';
import NotFound from  './containers/NotFound/index.jsx';


// export  default (
//     <div>
//         <Route path="/" exact component={Home}/>
//         <Route path="/login" exact component={Login}/>
//     </div>
// )

export default [{
    path:'/',
    component:App,
    loadData:App.loadData,
    routes:[
        {
            path:'/',
            component:Home,
            exact:true,        //只有路由精确匹配时才展示
            loadData:Home.loadData,
            key:'home',
            routes:[
                {
                    path:'/ttt',
                    component:Login,
                    exact:true,
                    key:'ttt'
                }
            ]
        },
        {
            path:'/login',
            component:Login,
            exact:true,
            key:'login'
        },
        {
            component:NotFound,
        }
    ]
}]




