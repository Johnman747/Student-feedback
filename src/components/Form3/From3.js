import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Form3 extends Component {
    state = {
        form3: "1"
    }
    handelChange= (e)=>{
        this.setState({
            form3: e.target.value
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_3', payload: this.state.form3})
    }
  render() {
    return (
        <Router>
        <h1>How well are you being supported?</h1>
        <select value={this.state.form3} onChange={this.handelChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to='/4'><button onClick={this.handelClick}>Next</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form3);