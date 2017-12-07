import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';

const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger({collapsed: true})
  )
)

export default store
