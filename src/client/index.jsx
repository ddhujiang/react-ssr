import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import routes from '../Routes.jsx';

import {Provider} from 'react-redux';
import {getClientStore} from '../store';

import {renderRoutes} from 'react-router-config';

const store=getClientStore();
//创建了一个store
//Provider把store传递给了路由下面的每一个组件
const App=()=>{
    return(
        //每次getStore执行都会生成一个新的store,避免所用用户都用同一个store
      <Provider store={store}>
        <BrowserRouter>
            <div>
                {/*{routes.map(route=>(<Route {...route}/>)*/}
                {/*)}*/}
                {renderRoutes(routes)}
            </div>
        </BrowserRouter>
      </Provider>
    )
}
 
// ReactDom.render(<Home/>,document.querySelector("#root"));
//hydrate 数据的脱水和注水
ReactDom.hydrate(<App/>,document.querySelector("#root"));
