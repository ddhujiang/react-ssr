import {CHANGE_LOGIN} from './constain'
const changeLogin=(value)=>({
    type:CHANGE_LOGIN,
    value
});
//登入
export const login=()=>{
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.get('/api/longin').then((res)=>{
            //发送一个请求,拿到数据
            const isLogin=true;
            //派发一个action，reducer中会接收到这个action的返回
            dispatch(changeLogin(isLogin));
        })
    }
};
//退出
export const logOut=()=>{
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.get('/api/longinOut').then((res)=>{
            //发送一个请求,拿到数据
            const isLogin=false;
            //派发一个action，reducer中会接收到这个action的返回
            dispatch(changeLogin(isLogin));
        })
    }
};
//获取登入状态
export const getHeaderInfo=()=>{
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.get('/api/isLongin').then((res)=>{
            //发送一个请求,拿到数据
            const isLogin=false;
            //派发一个action，reducer中会接收到这个action的返回
            dispatch(changeLogin(isLogin));
        })
    }
};
