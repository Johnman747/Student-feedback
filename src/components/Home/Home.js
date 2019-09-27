import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';


class Home extends Component {

render() {
    return (
    <Router>
        <h1>Ready For Feedback?</h1>
        <Link to='/1'><button>Feedback</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Home);