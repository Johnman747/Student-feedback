import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';


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
        <p>Feelings: {this.props.reduxStore.formReducer[0]}</p>
        <p>UnderStanding: {this.props.reduxStore.formReducer[1]}</p>
        <p>Supported: {this.props.reduxStore.formReducer[2]}</p>
        <p>Comments: {this.props.reduxStore.formReducer[3]}</p>
        <Link to='/'><button onClick={this.handelClick}>Leave New Feedback</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Thanks);