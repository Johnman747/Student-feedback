import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Form4 extends Component {

  render() {
    return (
        <Router>
        <h1>How are your feeling today?</h1>
        <input type="text" placeholder="Type Here"/>
        <Link to='/'><button>Submit</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form4);