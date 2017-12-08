import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Posts from './Posts';
import Post from './Post';
import CreatePostForm from './CreatePostForm';


export default class App extends Component {

  render() {
    return (
      <div className='App'>

          <Navigation/>

          <Switch>
            <Route exact path='/posts' component={Posts} />
            <Route path='/posts/:id' component={Post} />
            <Route path='/create-post' component={CreatePostForm} />
            <Redirect from='/' to='/posts' />
          </Switch>

      </div>
    );
  }
}
