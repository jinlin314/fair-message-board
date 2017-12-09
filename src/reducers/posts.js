import { GET_ALL_POSTS, CREATE_POST, GET_POST, SUBMIT_COMMENT } from '../action-creators/posts';

/* ------------------    REDUCER    --------------------- */
const initialStates = {
  post: {},
  posts:[]
};

const postsReducer = (state = initialStates, action) => {
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

export default postsReducer;