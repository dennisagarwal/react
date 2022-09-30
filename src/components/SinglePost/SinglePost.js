import React, { Component } from "react";

class SinglePost extends Component {
    constructor(props){
        super(props);
        console.log('[single post] constructor called')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[single post] should component update fired');
        return true;
    }
  render() {
    console.log('[single post] render called');
    return (
      <div>
        {this.props.title}
        {this.props.description}
        <input 
        type="text" 
        value={this.props.title} 
        onChange={this.props.titleChange}>
        </input>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[single post] get snapshot fired')
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot){
  console.log(snapShot);
  console.log('[single post] component did update fired')
  }

  componentDidMount(){
    console.log('[single post] component did mount called');
  }
}

export default SinglePost;
