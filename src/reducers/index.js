import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts: require('./posts').default,
  // product: require('./product').default,
})

export default rootReducer
