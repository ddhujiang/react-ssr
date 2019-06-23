//redux-thunk 可以在action里面写一些异步的操作
import axios from 'axios';
//使用常量的好处就是当变量名写错的时候控制台会报错，方便debug
import {CHANGE_LIST} from './constain';


const changeList=(list)=>({
    type:CHANGE_LIST,
    list
});
export const  getHomeList=()=>{
    //axiosInstance，是创建store时生成传递过来的，用于区别url地址的前缀，客户端和服务器端的不同
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.get('/api/news.json').then((res)=>{
            //发送一个请求,拿到数据
            const list=['jj','12'];
            //派发一个action，reducer中会接收到这个action的返回
            dispatch(changeList(list))
        })
    }
};
