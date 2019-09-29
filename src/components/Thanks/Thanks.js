import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

class Thanks extends Component {

    handelClick=()=>{
        axios.post('/feedback', this.props.reduxStore.formReducer)
        .then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
        this.props.dispatch({type:'SET_CLEAR'})
    }

render() {
    return (
    <Router>
        <h1>Thank you!</h1>
        <h2>Your Answers</h2>
        <p>Feelings: {this.props.reduxStore.formReducer.form1}</p>
        <p>UnderStanding: {this.props.reduxStore.formReducer.form2}</p>
        <p>Supported: {this.props.reduxStore.formReducer.form3}</p>
        <p>Comments: {this.props.reduxStore.formReducer.form4}</p>
        <Link to='/'><Button variant='contained' onClick={this.handelClick}>Leave New Feedback</Button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Thanks);