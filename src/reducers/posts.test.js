import * as reducer from './posts';
import * as postsActions from '../action-creators/posts';

const initialStates = {
  post: {},
  posts:[]
};

const newPost1 = {key: '8111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []};
const newPost2 = {key: '9111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []};
const newComment1 = {author: 'jin', message: 'comment1'};
const newComment2 = {author: 'lin', message: 'comment2'};

describe('PostsReducers', () => {
  it('should return the initial state', () => {
    expect(reducer.default(undefined, {})).toEqual(initialStates)
  });

  it('should handle CREATE_POST', () => {
    expect(reducer.default(
      undefined,
      {
        post: newPost1,
        type: postsActions.CREATE_POST
      })
    ).toEqual({
      post: newPost1,
      posts: [newPost1]
    });
  });

  it('should add new post to the list of posts', () => {
    expect(reducer.default(
      undefined,
      {
        post: newPost2,
        type: postsActions.CREATE_POST
      })
    ).toEqual({
      post: newPost2,
      posts: [newPost1, newPost2]
    });
  });

  it('should get all posts', () => {
    expect(reducer.default(
      undefined,
      {
        type: postsActions.GET_ALL_POSTS
      }).posts
    ).toEqual([newPost1, newPost2]);
  });

  it('should handle SUBMIT_COMMENT to targeting post', () => {
    expect(reducer.default(
      undefined,
      {
        comment: newComment1,
        postKey: newPost1.key,
        type: postsActions.SUBMIT_COMMENT
      }).posts[0].comments[0]
    ).toEqual(newComment1);
  });

  it('should add new comment to the list of comments of targeting post', () => {
    expect(reducer.default(
      undefined,
      {
        comment: newComment2,
        postKey: newPost1.key,
        type: postsActions.SUBMIT_COMMENT
      }).posts[0].comments
    ).toEqual([newComment1, newComment2]);
  });
});