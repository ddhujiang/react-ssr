import axios from 'axios';
const instance =axios.create(
    {
        baseURL:'/',
        //适用于全局传参，如token
        params:{        //传递一个所有接口公用的参数
            secret:'abcd'
        }
    }
);
export default instance
