import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { getAll } from './action-creators/posts'


class App extends Component {

  render() {
    console.log("this.state", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
