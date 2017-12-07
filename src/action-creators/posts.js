// /* ------------------    ACTIONS    --------------------- */
//
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';

//
// /* --------------    ACTION CREATORS    ----------------- */
//
export const getAll = (posts) => ({ type: GET_ALL_POSTS, posts })
export const createPost = (post) => ({ type: CREATE_POST, post })
export const getPost = (post) => ({ type: GET_POST, post })
