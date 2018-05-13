import React, { Component } from 'react';
import'./App';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
// import Albums from './components/Albums';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostForm />
        <hr / >
        <Posts />
      </div>
    );
  }
}

export default App;
