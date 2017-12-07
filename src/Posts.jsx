import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from './action-creators/posts';

class Posts extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    console.log("this.props", this.props);

    if (!this.props.posts || this.props.posts.length === 0) {
      return <div>There's no post.</div>
    }

    return (
      <div>
        {
          this.props.posts.map(post => {
            return (<div>{post}</div>)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
};

const mapDispatch ={ getAll }

export default connect(mapStateToProps, mapDispatch)(Posts)