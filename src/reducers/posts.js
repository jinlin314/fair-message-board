import { GET_ALL_POSTS, CREATE_POST, GET_POST } from '../action-creators/posts';

/* ------------------    REDUCER    --------------------- */
const initialStates = {
  post: {},
  posts: []
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
      newState.post = action.post;
      break;

    default:
      return newState;
  }
  return newState;
}
