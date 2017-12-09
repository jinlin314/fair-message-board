import { GET_ALL_POSTS, CREATE_POST, GET_POST, SUBMIT_COMMENT } from '../action-creators/posts';

/* ------------------    REDUCER    --------------------- */
const initialStates = {
  post: {},
  posts: [{key: '111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []},
    {key: '222', title: 'second post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: [{author: 'jin', message: 'cccm'}]},
    {key: '3111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []},
    {key: '4111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []},
    {key: '5111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []},
    {key: '6111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []},
    {key: '7111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []},
    {key: '8111', title: 'first post', author: 'Jin', message: 'ajgfhsdjghfdsg', time: '12/8/2016 @ 1pm', comments: []}]
};

export default (state = initialStates, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_POSTS:
      break;
    case CREATE_POST:
      newState.post = action.post;
      newState.posts.push(action.post);
      break;
    case GET_POST:
      newState.posts.forEach(post => {
        if (post.key === action.key) {
          newState.post = post;
        }
      });
      break;
    case SUBMIT_COMMENT:
      newState.posts.forEach(post => {
        if (post.key === action.postKey) {
          post.comments.push(action.comment);
          newState.post = post;
        }
      });
      break;

    default:
      return newState;
  }
  return newState;
}
