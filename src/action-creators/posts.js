// /* ------------------    ACTIONS    --------------------- */
//
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';

//
// /* --------------    ACTION CREATORS    ----------------- */
//
export const getAll = () => ({ type: GET_ALL_POSTS });
export const createPost = (post) => ({ type: CREATE_POST, post });
export const getPost = (key) => ({ type: GET_POST, key });
export const submitComment = (postKey, comment) => ({ type: SUBMIT_COMMENT, postKey, comment });
