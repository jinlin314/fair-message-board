import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { submitComment, getPost } from './action-creators/posts';
import './CommentForm.css'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      author: ''
    }
  }

  submitNewComment = () => {
    const comment = {
      message: this.state.message,
      author: this.state.author
    };
    this.props.submitComment(this.props.postKey, comment);
    this.setState({message: '', author: ''});
    const div = document.getElementById("commentMessage");
    div.focus();
  };

  onMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  onAuthorChange = (event) => {
    this.setState({author: event.target.value});
  };

  onMessageEnter = (event) => {
    const div = document.getElementById("commentAuthor");
    if (event.key === 'Enter') {
      div.focus();
    }
  };

  onAuthorEnter = (event) => {
    if (this.state.author.length > 0 && this.state.message.length > 0 && event.key === 'Enter') {
      this.submitNewComment();
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

  onSubmit = (event) => {
    event.preventDefault();
    this.submitNewComment();
  };

  render() {
    const valid = (this.state.message.length > 0 && this.state.author.length > 0);
    return (<div className="row Comment-form">
      <div className="col-lg-10 col-md-10 col-sm-12">
        <FormGroup
          controlId='commentMessage'
          validationState={this.validateNotEmpty(this.state.message)}
        >
          <ControlLabel>Reply Messages:</ControlLabel>
          <FormControl
            style={{height: '60px'}}
            componentClass='textarea'
            value={this.state.message}
            placeholder='Enter Your comment Here'
            onChange={this.onMessageChange}
            onKeyPress={this.onMessageEnter}
            maxLength={256}
          />
          <FormControl.Feedback />
          <div className="Create-post-word-count">{this.state.message.length}/1000</div>
        </FormGroup>

        <FormGroup
          controlId='commentAuthor'
          validationState={this.validateNotEmpty(this.state.author)}
        >
          <ControlLabel>Reply User</ControlLabel>
          <FormControl
            type='text'
            value={this.state.author}
            placeholder='Enter Your Name'
            onChange={this.onAuthorChange}
            onKeyPress={this.onAuthorEnter}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-12 Comment-center">
        <Button onClick={this.onSubmit} disabled={!valid} className='Post-btn Comment-reply'>
          Post reply
        </Button>
      </div>
    </div>)
  }
}

export default connect(
  ({ posts }) => ({ posts }),
  { submitComment, getPost },)(CommentForm);