import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Button} from '@material-ui/core';


class Home extends Component {

render() {
    return (
    <Router>
        <h1>Ready For Feedback?</h1>
        <Link to='/1'><Button variant='contained'>Feedback</Button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Home);