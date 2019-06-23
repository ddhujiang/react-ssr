import React from 'react';
class NotFound extends React.Component{
    componentWillMount(){
        console.log(this.props)
        if(this.props.staticContext){
            this.props.staticContext.NOT_FOUND=true;
        }
    }
    render(){
        return (
            <div>
                404
            </div>
        )
    }
}
export default NotFound