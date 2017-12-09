import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Posts from './Posts';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import store from './store';

export default (props) =>  {
  return (
    <Router>
      <div className='App'>
        <Navigation/>

        <Switch>
          <Route exact path='/posts' component={Posts} store={store} />
          <Route path='/posts/:id' component={Post} store={store} />
          <Route path='/create-post' component={CreatePostForm} store={store} />
          <Redirect from='/' to='/posts' />

        </Switch>

      </div>
    </Router>
  );
}