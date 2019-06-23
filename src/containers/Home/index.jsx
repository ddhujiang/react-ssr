import  React from 'react';
import  {connect} from 'react-redux';
import {Helmet} from 'react-helmet'
import {getHomeList} from './store/action';
import style from  './style.css';
import withStyle from './../../withStyle';

class Home extends React.Component{
    // componentWillMount(){
    //     // console.log(this.props.staticContext);   //获取context
    //     if(this.props.staticContext){
    //         //把css样式传递到context内，用于服务端渲染css
    //         this.props.staticContext.css.puhs(style._getCss());
    //         // console.log(style._getCss())
    //     }
    // }
    componentDidMount(){
        //这个生命周期函数只会在客户端执行
        this.props.getHomeList()
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>这是首页</title>
                    <meta name="description" content="这是首页"/>
                </Helmet>
                <div onClick={()=>{alert('home')}} className={style.home}>
                    首页
                </div>
                <div>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <div key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
// const Home=(props)=>{
//     return (
//         <div>
//             <Header/>
//             <div onClick={()=>{alert('jjjjj')}}>
//                 {props.name}
//             </div>
//         </div>
//     )
// };


const mapStateToProps =state=>({
    list:state.home.newsList
});
const mapDispatchToProps=dispatch=>({
    getHomeList(){
        dispatch(getHomeList());
        console.log('jjjj')
    }
});
const ExportHome=connect(mapStateToProps,mapDispatchToProps)(withStyle(Home,style));
ExportHome.loadData=(store)=>{
//负责在服务器渲染之前，把这个路由需要的数据提前加载好
    return store.dispatch(getHomeList())
};
export default ExportHome;
