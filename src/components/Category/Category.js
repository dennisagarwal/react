import React, { Component } from 'react';
import { WithCategory } from './WithCategory';

class Category extends Component {
    render() {
        return (<div>Categories Components</div> );
    }
}

export default WithCategory(Category);