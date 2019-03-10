import React, { Component } from 'react';
import logo from './FinalLogo.png';
import sage from './sage.jpg';
import ginseng from './ginseng.jpg';
import lavender from './lavender.jpg';
import ginko from './ginko.jpg';
import honey from './honey.jpg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section id="header-wrap">
          <h2>
            Welcome to New World Herbals
          </h2>
          <p>Making holistic remedies convenient, easy to use, and tasty</p>
          </section>  
        </header>
        <section id="product-display">
          <h3 class="mission-statement">
              
          </h3>
          <h1 id="products"> Herbalicious Products! </h1>
          <img src={honey} className="Sage-img"/>
          <br></br>
          <h2>Honey Twigs</h2>
          <img src={ginseng} className="Prod-Icon" alt=""/>
          <img src={lavender} className="Prod-Icon" alt=""/>
          <img src={ginko} className="Prod-Icon" alt=""/>
          <img src={sage} className="Prod-Icon" alt=""/>
          <img src={ginseng} className="Prod-Icon" alt=""/>
          <br></br>
          <p class="prod-desc">Focus Helps you think!</p>
          <p class="prod-desc">Sleep Aid to help you gain meaningful rest!</p>
          <p class="prod-desc">Morning blend to wake you up naturally</p>
          <p class="prod-desc">Respitory Aid to help your lungs</p>
          <p class="prod-desc">Aphrosdiac for intimate moments</p>
        </section>
        <section id="order-form">
          <h2>Order Here:</h2>
          <form>
            <label>
              What Type of Honey Stick:
              <select name="hstick">
                <option value="brain">Focus</option>
                <option value="restful">Restful Night</option>
                <option value="morning">Morning Glory</option>
                <option value="breath">Easy Breathing</option>
                <option value="pleasure">Sweet Pleasure</option>
              </select>
            </label>
            <label>
              How many would you like to order:
              <select name="quanity">
                <option value="1">1 Stick - $2.00 USD</option>
                <option value="1">21 Sticks - $20.00 USD</option>
                <option value="1">90 Stick - $60.00 USD</option>
              </select>
            </label>
            <Button varient="contained"  onclick="{}">
              Add to Cart
            </Button>
            <Button varient="contained"  onclick="{}">
              Checkout
            </Button>
          </form>
        </section>
        <div id="colorbuff">
          <div id="colormask">
          </div>
        </div>
        <footer>
          <p> &copy; Website Design New World Herbals. All pictures are used for the purposes of this startup weekend and will not be used without comerical liscense</p>
        </footer>

      </div>
    );
  }
}


export default App;
