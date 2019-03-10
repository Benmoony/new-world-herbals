import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
      <Button varient="contained"  onclick="{}">
        Products
      </Button>
      <Button varient="contained"  onclick="{}">
        Subscribe
      </Button>
      <Button varient="contained" onclick="navInformation()">
        Information
      </Button>
      <Button varient="contained" onclick="navAbout()">
        About Us
      </Button>
    </nav>
  );
}

NavComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

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

