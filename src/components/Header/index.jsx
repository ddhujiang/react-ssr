import  React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from './store/index';
import style from './style.css';
import withStyle from './../../withStyle';

class Header extends React.Component{
    // componentWillMount(){
    //     // console.log(this.props.staticContext);   //获取context
    //     if(this.props.staticContext){
    //         //把css样式传递到context内，用于服务端渲染css
    //         //利用数组，多级路由下防止css值被覆盖
    //         this.props.staticContext.css.push(style._getCss());
    //         // console.log(style._getCss())
    //     }
    // }
    render(){
        const {login,handleLogin,handleLogOut}=this.props;
        return (
            <div className={style.header}>
                <Link to="/">home</Link>
                <br/>
                {
                    login?(
                        <Fragment>
                            <div onClick={handleLogOut}>退出</div>
                        </Fragment>
                    ):(
                        <div onClick={handleLogin}>登录</div>
                    )
                }
            </div>
        )
    }
}

const mapState=(state)=>({
    login:state.header.login
});
const mapDispatch=(dispatch)=>(
    {
        handleLogin(){
            dispatch(actions.login())
        },
        handleLogOut(){
            dispatch(actions.logOut())
        }
    }
);
export default connect(mapState,mapDispatch)(withStyle(Header,style));


