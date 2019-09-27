import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Form1 extends Component {
    state = {
        form1: "1"
    }
    handelChange= (e)=>{
        this.setState({
            form1: e.target.value
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_1', payload: this.state})
    }
  render() {
    return (
    <Router>
        <h1>How are your feeling today?</h1>
        <select value={this.state.form1} onChange={this.handelChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to='/2'><button onClick={this.handelClick}>Next</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form1);