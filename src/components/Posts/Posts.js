import React, { Component } from "react";
import SinglePost from "../SinglePost/SinglePost";

class Posts extends Component {
  state = {
    posts: [
      { id: 1, title: "Post1", description: "Description1" },
      { id: 2, title: "Post2", description: "Description2" },
      { id: 3, title: "Post3", description: "Description3" },
    ],
    showPosts: true,
  };

  updatePost = (e) => {
    e.preventDefault();
    this.setState({
      showPosts: !this.state.showPosts,
    });
  };

  onChangeTitleHandler = (id, e) => {
    const postIndex = this.state.posts.findIndex((post) => post.id === id);
    const posts = [...this.state.posts];
    posts[postIndex].title = e.target.value;

    this.setState({
        posts,
    })
  };

  getPosts() {
    if (!this.state.showPosts) return null;

    let posts = this.state.posts.map((post) => (
      <SinglePost
        title={post.title}
        description={post.description}
        titleChange={this.onChangeTitleHandler.bind(this, post.id)}
      />
    ));
    return <div>{posts}</div>;
  }

  render() {
    return (
      <div>
        <button onClick={this.updatePost}>
          {this.state.showPosts ? "Hide Post" : "Show Post"}
        </button>
        <hr />
        {this.getPosts()}
      </div>
    );
  }
}

export default Posts;
