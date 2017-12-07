import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import CreatePostForm from './CreatePostForm';


export default class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Fair Message Board</h1>
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/create-post" component={CreatePostForm} />
            <Redirect from="/" to="/posts" />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
