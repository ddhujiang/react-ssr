import axios from 'axios';
const createInstance =(req)=>axios.create(
    {
        baseURL:'http://47.95.113.63/ssr',
        //防止cookie丢失
        params:{        //传递一个所有接口公用的参数
            secret:'abcd'
        },
        headers:{
            cookie:req.get('cookie')|| ''
        }
    }
);
export default createInstance
