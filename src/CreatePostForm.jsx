import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './action-creators/posts';

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      message: ""
    }
  }

  onTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  onAuthorChange = (event) => {
    this.setState({author: event.target.value});
  };

  onMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  onCreatePostClick = (event) => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      author: this.state.author,
      message: this.state.message
    };
    this.props.createPost(post);
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <label>Title: </label>
          <input
            id="formControlsText"
            type="text"
            placeholder="Enter text"
            onChange={this.onTitleChange}
          />
          <label>Author: </label>
          <input
            id="formControlsText"
            type="text"
            placeholder="Enter text"
            onChange={this.onTitleChange}
          />
          <label>Message: </label>
          <textarea
            rows="6"
            cols="80"
            onChange={this.onMessageChange}
          />
          <button type="submit" onClick={this.onCreatePostClick}>
            Create post
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
};

const mapDispatch ={ createPost };

export default connect(mapStateToProps, mapDispatch)(CreatePostForm);
