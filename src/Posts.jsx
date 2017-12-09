import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from './action-creators/posts';
import './Posts.css';
import { Button, Well } from 'react-bootstrap';

class Posts extends Component {
  componentWillMount() {
    this.props.getAll();
  }

  getTime() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (date + ' @' + time);
  };

  render() {
    const posts = this.props.posts.posts;

    const createNewPost = (<div className="Create-btn-container">
      <Link to='/create-post'>
        <Button className='Create-post-button'>Create New <br />Post</Button>
      </Link>
    </div>);

    const emptyPosts = (<div className="Posts-empty">
      There are currently no posts...add one!
    </div>)

    if (!posts || posts.length === 0) {
      return <div>
        {emptyPosts}
        {createNewPost}
      </div>
    }

    return (
      <div className='Posts-container'>
        <h2>The Fairgodboss Message Board</h2>
        <div className='list-group'>
          {
            posts.map(post => {
              return (<div className="Posts-post" key={post.key}>
                  <Well>
                  <Link to={`/posts/${post.key}`} className='list-group-item list-group-item-action flex-column align-items-start'>
                    <div className='d-flex w-100 justify-content-between'>
                      <h5 className='mb-1'>{post.title}</h5>
                    </div>
                    <small>
                      <span role='img' aria-label='writer'> ✍ </span>{post.author}
                      <span className="Posts-comments">{post.comments.length} comments</span>
                      <span className="Posts-date">Last Update: {post.time}</span>
                      </small>
                  </Link>
                </Well>
              </div>)
            })
          }
        </div>
        <div>
          {createNewPost}
        </div>
      </div>
    )
  }
}

export default connect(
  ({ posts }) => ({ posts }),
  {getAll},)(Posts)

