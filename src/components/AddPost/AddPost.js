import React, { Component } from "react";

class AddPost extends Component {
  state = {
    title: '',
    description: '',
  };



  addPostHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  textChange = (title, e) => {
    this.setState({
      [title]: e.target.value,
    });
  };
  

  render() {
    return (
      <div>
        <form onSubmit={this.addPostHandler}>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.textChange.bind(this, 'title')}
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            value={this.state.description}
            onChange={this.textChange.bind(this, 'description')}
          ></textarea>                        
          <button type='submit'>Add Post</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
