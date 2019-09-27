import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Form2 extends Component {
    state = {
        form2: "1"
    }
    handelChange= (e)=>{
        this.setState({
            form2: e.target.value
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_2', payload: this.state.form2})
    }
  render() {
    return (
        <Router>
        <h1>How well are you understanding the content?</h1>
        <select value={this.state.form2} onChange={this.handelChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <Link to='/3'><button onClick={this.handelClick}>Next</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form2);