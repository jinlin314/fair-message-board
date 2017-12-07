import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';

import {getAll} from './action-creators/posts';

const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger({collapsed: true})
  )
)

export default store

store.dispatch(getAll());