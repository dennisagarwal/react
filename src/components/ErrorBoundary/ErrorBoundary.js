import React, { Component } from 'react';

class ErrorBoundary extends Component {
     constructor(props){
        super(props);
        this.state = {hasError: false};
     }
     static getDerivedStateFromError() {
        return {hasError:true}
     }

    componentDidCatch(error, info){}
        render(){
            if(this.state.hasError){
                return (<div> An error occured </div>);
            }
            return this.props.children;
        }
}

export default ErrorBoundary;