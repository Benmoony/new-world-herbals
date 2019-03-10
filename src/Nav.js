import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function NavComponent(props){
  const { classes } = props;
  return(
    <nav>
      <h1>New World Herbals</h1>
      <Button varient="contained" color="primary" onlclick="navProducts()">
        Products
      </Button>
      <Button varient="contained" color="primary" onlclick="navSubscribe()">
        Subscribe
      </Button>
      <Button varient="contained" color="primary" onlclick="navInformation()">
        Information
      </Button>
      <Button varient="contained" color="primary" onlclick="navAbout()">
        About Us
      </Button>
    </nav>
  );
}

ReactDOM.render(<NavComponent />, document.querySelector('navbar'));

/*
class NavComponent extends React.Component{
    render() {
      return (
        <nav>
        <h1>New World Herbals</h1>
            <button onClick={this.toggle}>Products</button>
            <button onClick={this.toggle}>Subscribe</button>
            <button onClick={this.toggle}>Information</button>
        </nav>
      );
    }
}



//render the nav on the dom */

