import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from './action-creators/posts';

class Posts extends Component {
  componentWillMount() {
    this.props.getAll();
  }

  render() {
    console.log("this.props", this.props);
    const posts = this.props.posts.posts;

    if (!posts || posts.length === 0) {
      return <div>There's no post.</div>
    }

    return (
      <div className="list-group">
        {
          posts.map((post, idx) => {
            return <a key={`post${idx}`} className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{post.title}</h5>
                <small>{post.comments.length} comments</small>
              </div>
              <p className="mb-1">{post.message}</p>
              <small> ✍ {post.author}</small>
            </a>
          })
        }
      </div>
    )
  }
}

export default connect(
  ({ posts }) => ({ posts: posts }),
  {getAll},)(Posts)

