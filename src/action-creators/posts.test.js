import * as postsActions from './posts';

const post ={key: '222', title: 'second post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: [{author: 'jin', message: 'cccm'}]};

describe('PostsActions', () => {
  it('should create an action to create a new post', () => {
    const expectedAction = {
      post,
      type: postsActions.CREATE_POST
    };
    expect(postsActions.createPost(post)).toEqual(expectedAction)
  });

  it('should create an action to create a new post', () => {
    const expectedAction = {
      type: postsActions.GET_ALL_POSTS
    };
    expect(postsActions.getAll()).toEqual(expectedAction)
  });

  it('should create an action to create a new post', () => {
    const key = post.key;
    const expectedAction = {
      key,
      type: postsActions.GET_POST
    };
    expect(postsActions.getPost(key)).toEqual(expectedAction)
  });

  it('should create an action to create a new post', () => {
    const postKey = post.key;
    const comment = 'new comment';
    const expectedAction = {
      postKey,
      type: postsActions.SUBMIT_COMMENT
    };
    expect(postsActions.submitComment(postKey)).toEqual(expectedAction)
  });
});