import React, { Component } from 'react';
import './CreatePostForm.css';
import { connect } from 'react-redux';
import { createPost } from './action-creators/posts';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      message: '',
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

  validateNotEmpty = (target) => {
    const length = target.length;
    if (length > 0) {
      return 'success';
    }
    else {
      return 'warning';
    }
  };

  validateMessage = () => {
    const length = this.state.message.length;
    if (length > 0 && length < 1000) {
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
    const post = {
      title: this.state.title,
      author: this.state.author,
      message: this.state.message,
      comments: []
    };
    this.props.createPost(post);
  };

  render() {
    const required = <span className='Create-post-required'>*</span>
    const disable = !(this.state.title.length > 0 && this.state.author.length > 0 && this.state.message.length > 0);
    return (
      <div className='CreatePostForm'>
        <form>
          <FormGroup
            controlId='createPostTitle'
            validationState={this.validateNotEmpty(this.state.title)}
          >
            <ControlLabel>Title {required}</ControlLabel>
            <FormControl
              type='text'
              value={this.state.title}
              placeholder='Enter title'
              onChange={this.onTitleChange}
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId='createPostAuthor'
            validationState={this.validateNotEmpty(this.state.author)}
          >
            <ControlLabel>Author {required}</ControlLabel>
            <FormControl
              type='text'
              value={this.state.author}
              placeholder='Enter Your Name'
              onChange={this.onAuthorChange}
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup
            controlId='createPostMessage'
            validationState={this.validateMessage()}
          >
            <ControlLabel>Message {required}</ControlLabel>
            <FormControl
              style={{height: '200px'}}
              componentClass='textarea'
              value={this.state.message}
              placeholder='Enter Your Message Here'
              onChange={this.onMessageChange}
              maxLength={1000}
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.message.length}/1000</HelpBlock>
          </FormGroup>

          <div className='Create-button-container'>
            <Button type='submit' onClick={this.clear} className='create-post-btn create-post-clear'>
              Clear
            </Button>
            <Button type='submit' onClick={this.onCreatePostClick} disabled={disable} className='create-post-btn create-post-submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  ({ post }) => ({ posts: post }),
  {createPost},)(CreatePostForm)
