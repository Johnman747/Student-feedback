import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Button,Select,MenuItem} from '@material-ui/core';

class Form1 extends Component {
    state = {
        answer:{
            form1: "1"
        }
    }
    handelChange= (e)=>{
        this.setState({
            answer:{
                form1: e.target.value
            }
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_1', payload: this.state.answer.form1})
    }
  render() {
    return (
    <Router>
        <h1>How are your feeling today?</h1>
        <Select value={this.state.answer.form1} onChange={this.handelChange}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
        </Select>
        <br/>
        <Link to='/'><Button variant='contained'>Back</Button></Link>
        <Link to='/2'><Button variant='contained' onClick={this.handelClick}>Next</Button></Link>

    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form1);