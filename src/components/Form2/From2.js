import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Button,Radio,RadioGroup,FormControlLabel} from '@material-ui/core';
import './Form2.css';

class Form2 extends Component {
    state = {
        answer:{
            form2: "1"
        }
    }
    handelChange= (e)=>{
        this.setState({
            answer:{
                form2: e.target.value
            }
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_2', payload: this.state.answer.form2})
    }
  render() {
    return (
        <Router>
        <h1>How well are you understanding the content?</h1>
        <div className="radioBtns">
        <RadioGroup  value={this.state.answer.form2} onChange={this.handelChange} row>
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="1" value="1">1</FormControlLabel>
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="2" value="2">2</FormControlLabel>
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="3" value="3">3</FormControlLabel>
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="4" value="4">4</FormControlLabel>
            <FormControlLabel labelPlacement="top" control={<Radio/>} label="5" value="5">5</FormControlLabel>
        </RadioGroup>
        </div>
        <br/>
        <Link to='/1'><Button variant='contained'>Back</Button></Link>
        <Link to='/3'><Button variant='contained' onClick={this.handelClick}>Next</Button></Link>

    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form2);