import React from 'react';
//这个函数，是生成高阶组件的函数
//这个函数，返回一个组件
export default (DecoratedComponent,style)=>{
    //返回的这个组件，叫做高阶组件
    return class NewComponent extends React.Component{
        componentWillMount(){
            if(this.props.staticContext){
                //把css样式传递到context内，用于服务端渲染css
                //利用数组，多级路由下防止css值被覆盖
                this.props.staticContext.css.push(style._getCss());
                // console.log(style._getCss())
            }
        }
        render(){
            return <DecoratedComponent {...this.pros}/>
        }
    }
}
