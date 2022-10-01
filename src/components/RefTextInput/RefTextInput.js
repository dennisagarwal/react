import React, { Component } from 'react';

class RefTextInput extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = (value) => {
        console.log(this.inputRef);
        this.inputRef.current.focus();
        this.inputRef.current.value= value;
    }
    render() {
        return (
            <div>
            <div><input 
            type='text' 
            ref={this.inputRef}/></div>
            <button onClick={this.focusInput.bind(this,'calling from child',)}>Focus Input</button>
            </div>
        );
    }
}

export default RefTextInput;