import React, { Component } from 'react';
import ButtonContext from '../Context/ButtonContext';

class Navigation extends Component {
   
    render() {
        return (
            <div>
                <ButtonContext.Consumer>
                    {(value) => {
                        return <a href='#'>{value}</a>
                    }}
                </ButtonContext.Consumer>
            </div>
        );
    }
}

export default Navigation;