import React, { Component } from 'react';
import logo from './logo.svg';
import sage from './sage.jpg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Welcome to New Age Herbals
          </h2>
          <p>Here You'll find our products and information about our Herbal Concotions</p>
        </header>
        <img src={sage} className="Sage-img"/>
      </div>
    );
  }
}


export default App;
