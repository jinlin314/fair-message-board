import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from './action-creators/posts';
import Posts from './Posts';
import Post from './Post';


class App extends Component {

  render() {
    console.log("this.state", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
};

const mapDispatch ={ getAll }

export default connect(mapStateToProps, mapDispatch)(App)
