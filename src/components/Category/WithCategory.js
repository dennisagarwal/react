import React,{ Component } from "react";

export function WithCategory(WrappedComponent){
    return class extends Component {
        render() {
            return(
                <div><WrappedComponent/></div>
            );
        }
    };
}