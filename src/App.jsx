import  React from 'react';
import  Header from './components/Header/index.jsx';
import {renderRoutes} from 'react-router-config';
import {actions} from './components/Header/store/index'

const App=(props)=>{

    return (
        <div>
            <Header staticContext={props.staticContext}/>
            {/*显示每个页面对应的内容*/}
            {renderRoutes(props.route.routes)}
        </div>
    )
};
App.loadData=(store)=>{
    return store.dispatch(actions.getHeaderInfo());
};
export default App;


