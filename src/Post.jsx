import React, { Component } from 'react';
import'./Post.css';
import { connect } from 'react-redux';
import { getPost } from './action-creators/posts';
import CommentForm from './CommentForm';
import { Button, Well } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.posts.post
    }
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.posts.post.key !== nextProps.posts.post.key) {
      this.setState({post: nextProps.posts.post});
    }
  }

  render() {
    const post = this.state.post;
    const emptyComment = !(post.comments && post.comments.length > 0)
      ? <p>This post does not have any replay yet...leave on now!</p>
      : null;

    return (
      <Well>
      <div className='Post-container container-fluid'>
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-12'>
            <h2>{post.title}</h2>
            <h6>
              <span role='img' aria-label='writer'> ✍ </span>{post.author}
              <span className='Post-time'>On: {post.time}</span>
            </h6>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 Comment-center'>
            <Link to='/posts'>
              <Button className='Post-btn Post-back'>
                Back to posts
              </Button>
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <p className='Post-message'>{post.message}</p>
            <h5><strong>Responses: </strong></h5>
            <div className='Post-comments-container'>
              { emptyComment }
              {
                post.comments && post.comments.map((comment, idx) => {
                  return (<div key={`comment#${idx}`}>
                    <div className='Post-comment-user'>{comment.author}:</div>
                    <div className='Post-comment-message'>{comment.message}</div>
                    {
                      (idx !== post.comments.length - 1) ? <div className='line-break'></div> : null
                    }
                  </div>);
                })
              }
              </div>
          </div>
        </div>
        <CommentForm postKey={post.key} />
      </div>
      </Well>
    )
  }
}

export default connect(
  ({ posts }) => ({ posts }),
  {getPost},)(Post)