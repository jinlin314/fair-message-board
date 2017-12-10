import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CreatePostForm.css';
import { connect } from 'react-redux';
import { createPost } from './action-creators/posts';
import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { getTime } from './utils';

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      message: ''
    }
  }

  createNewPost = () => {
    const post = {
      key: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
      title: this.state.title,
      author: this.state.author,
      message: this.state.message,
      time: getTime(),
      comments: []
    };
    this.props.createPost(post);
    this.props.history.push(`posts/${post.key}`);
  };

  onTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  onMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  onAuthorChange = (event) => {
    this.setState({author: event.target.value});
  };

  onTitleEnter = (event) => {
    const div = document.getElementById("createPostMessage");
    if (event.key === 'Enter') {
      div.focus();
    }
  };

  onMessageEnter = (event) => {
    const div = document.getElementById("createPostAuthor");
    if (event.key === 'Enter') {
      div.focus();
    }
  };

  onAuthorEnter = (event) => {
    if (this.state.title.length > 0 && this.state.author.length > 0
      && this.state.message.length > 0 && event.key === 'Enter'){
      this.createNewPost();
    }
  };

  validateNotEmpty = (target) => {
    const length = target.length;
    if (length > 0) {
      return 'success';
    }
    else {
      return 'warning';
    }
  };

  clear = (event) => {
    event.preventDefault();
    this.setState({title: '', author: '', message: ''})
  };

  onCreatePostClick = (event) => {
    event.preventDefault();
    this.createNewPost();
  };

  render() {
    const required = <span className='Create-post-required'>*</span>;
    const valid = (this.state.title.length > 0 && this.state.author.length > 0 && this.state.message.length > 0);
    return (
      <div className='Create-post-form'>
        <h2 className="Create-post-header">Create a new post</h2>
        <FormGroup
          controlId='createPostTitle'
          validationState={this.validateNotEmpty(this.state.title)}
        >
          <ControlLabel>Title {required}</ControlLabel>
          <FormControl
            type='text'
            value={this.state.title}
            placeholder='Enter title'
            maxLength={50}
            onChange={this.onTitleChange}
            onKeyPress={this.onTitleEnter}
            autoFocus={true}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId='createPostMessage'
          validationState={this.validateNotEmpty(this.state.message)}
        >
          <ControlLabel>Message {required}</ControlLabel>
          <FormControl
            style={{height: '220px'}}
            componentClass='textarea'
            value={this.state.message}
            placeholder='Enter Your Message Here'
            onChange={this.onMessageChange}
            onKeyPress={this.onMessageEnter}
            maxLength={1000}
          />
          <FormControl.Feedback />
          <div className="Create-post-word-count">{this.state.message.length}/1000</div>
        </FormGroup>

        <FormGroup
          controlId='createPostAuthor'
          validationState={this.validateNotEmpty(this.state.author)}
        >
          <ControlLabel>User: {required}</ControlLabel>
          <FormControl
            type='text'
            value={this.state.author}
            placeholder='Enter Your Name'
            onChange={this.onAuthorChange}
            onKeyPress={this.onAuthorEnter}
          />
          <FormControl.Feedback />
        </FormGroup>

        <div className='Create-button-container'>
          <Link to='/posts'>
            <Button className='create-post-btn create-post-clear'>
              Cancel
            </Button>
          </Link>
          <Button onClick={this.onCreatePostClick} disabled={!valid} className='create-post-btn create-post-submit'>
            Submit
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ post }) => ({ posts: post }),
  {createPost},)(CreatePostForm)
