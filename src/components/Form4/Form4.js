import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Button,TextField} from '@material-ui/core';

class Form4 extends Component {
    state = {
      answer:{
        form4: "",
      },
        button: true
    }
    handelChange= (e)=>{
        this.setState({
          answer:{
            form4: e.target.value,
          },
            button: false
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_4', payload: this.state.answer.form4})
    }
  render() {
    return (
        <Router>
        <h1>Any comments you want to leave?</h1>
        <TextField label="Comments" variant="outlined" type="text" placeholder="Type Here" onChange={(e)=>{this.handelChange(e)}}/>
        <br/>
        <Link to='/3'><Button variant='contained'>Back</Button></Link>
        <Link to='/5'><Button variant='contained' disabled={this.state.button} onClick={this.handelClick}>Submit</Button></Link>

    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form4);