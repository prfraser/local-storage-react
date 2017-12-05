import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clicked: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      clicked: ++prevState.clicked
    }))
  }

  render() {
    return (
      <div className="App">
        <button 
          onClick={this.handleClick}>
          I've been clicked {this.state.clicked} times.
        </button>
      </div>
    );
  }
}

export default App;
