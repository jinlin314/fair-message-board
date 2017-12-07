import { GET_ALL_POSTS } from '../action-creators/posts';

/* ------------------    REDUCER    --------------------- */

export default (state = {post: null, posts: ['post 1', 'post 2']}, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_ALL_POSTS:
      newState.products = action.products
      break
    // case GET_PRODUCT_BY_ID:
    //   newState.product = action.product
    //   break
    // case GET_PRODUCT_BY_CATEGORY:
    //   newState.products = action.products
    //   break
    // case ADD_PRODUCT:
    //   newState.product = action.product
    //   break
    // case UPDATE_PRODUCT:
    //   newState.product = action.product
    //   break
    // case REMOVE_PRODUCT:
    //   newState.product = action.product
    //   break
    default:
      return newState
  }
  return newState
}
