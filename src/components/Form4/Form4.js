import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Form4 extends Component {
    state = {
        form4: ""
    }
    handelChange= (e)=>{
        this.setState({
            form4: e.target.value
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_4', payload: this.state})
    }
  render() {
    return (
        <Router>
        <h1>How are your feeling today?</h1>
        <input type="text" placeholder="Type Here" onChange={(e)=>{this.handelChange(e)}}/>
        <Link to='/'><button onClick={this.handelClick}>Submit</button></Link>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form4);