import React, { Component } from 'react';
import RefTextInput from './RefTextInput';

class ParentRefTextInput extends Component {
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount(){
        this.componentRef.current.focusInput('calling from parent');
        console.log(this.componentRef);
    }
    render() {
        return (
            <div><RefTextInput ref={this.componentRef}/> </div>
        );
    }
}

export default ParentRefTextInput;