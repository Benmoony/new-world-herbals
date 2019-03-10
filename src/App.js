import React, { Component } from 'react';
import logo from './logo.svg';
import sage from './sage.jpg';
import ginseng from './ginseng.jpg';
import lavender from './lavender.jpg';
import ginko from './ginko.jpg';
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
        <h3 class="mission-statement">
            Herbalicious!
        </h3>
        <h1 id="products"> Products </h1>
        <img src={sage} className="Sage-img"/>
        <br></br>
        <h3>Tinctures and Honey</h3>
        <img src={ginseng} className="Prod-Icon"/>
        <img src={lavender} className="Prod-Icon"/>
        <img src={ginko} className="Prod-Icon"/>
        <img src={sage} className="Prod-Icon"/>
        <img src={ginseng} className="Prod-Icon"/>
        <br></br>
        <p class="prod-desc">Laboris ut sed sed eiusmod irure eiusmod laborum sit sint quis sed id ut amet in minim labore dolor aliquip excepteur.</p>
        <p class="prod-desc">Laboris ut sed sed eiusmod irure eiusmod laborum sit sint quis sed id ut amet in minim labore dolor aliquip excepteur.</p>
        <p class="prod-desc">Laboris ut sed sed eiusmod irure eiusmod laborum sit sint quis sed id ut amet in minim labore dolor aliquip excepteur.</p>
        <p class="prod-desc">Laboris ut sed sed eiusmod irure eiusmod laborum sit sint quis sed id ut amet in minim labore dolor aliquip excepteur.</p>
        <p class="prod-desc">Laboris ut sed sed eiusmod irure eiusmod laborum sit sint quis sed id ut amet in minim labore dolor aliquip excepteur.</p>

      </div>
    );
  }
}


export default App;
