import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Form4 extends Component {

  render() {
    return (
    <Router>
        <h1>From4</h1>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form4);