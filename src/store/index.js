import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as homeReducer} from '../containers/Home/store/index';
import {reducer as headerReducer} from '../components/Header/store/index';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer=combineReducers({
    home:homeReducer,
    header:headerReducer
});
// const reducer=(state={name:'dell'},action)=>{
//     return state;
// };
export const getStore=(req)=>{    //每次执行这个函数都会生成一个新的store,这样每个用户拿到的都是一个新的store
    //服务端serverAxios，thunk.withExtraArgument(serverAxios)会在异步的action中接受
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};
export const getClientStore=()=>{
    const defaultState=window.context.state;
    //客户端clientAxios
    return createStore(reducer,defaultState,applyMiddleware(thunk.withExtraArgument(clientAxios)));
};

// const store=createStore(reducer,applyMiddleware(thunk));
// export default getStore;