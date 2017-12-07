import { GET_ALL_POSTS, CREATE_POST, GET_POST } from '../action-creators/posts';

/* ------------------    REDUCER    --------------------- */

export default (state = {post: {}, posts: []}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_POSTS:
      newState.posts = action.posts;
      break;
    case CREATE_POST:
      newState.post = action.post;
      break;
    case GET_POST:
      newState.post = action.post;
      break;

    default:
      return newState;
  }
  return newState;
}
