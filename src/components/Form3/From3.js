import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import {Button,Slider} from '@material-ui/core';
import "./Form3.css"

class Form3 extends Component {
    state = {
        answer:{
            form3: 1
        }
    }
    handelChange= (e,value)=>{
        this.setState({
            answer:{
                form3: value
            }
        })
    }
    handelClick = ()=>{
        this.props.dispatch({type:'SET_FORM_3', payload: this.state.answer.form3})
    }
  render() {
    return (
        <Router>
        <h1>How well are you being supported?</h1>
        <div className="slider">
        <Slider defaultValue={1} step={1} marks min={1} max={5} valueLabelDisplay='on'
         onChange={(e,value)=>this.handelChange(e,value)}>
        </Slider>
        </div>
        <br/>
        <Link to='/2'><Button variant='contained'>Back</Button></Link>
        <Link to='/4'><Button variant='contained' onClick={this.handelClick}>Next</Button></Link>

    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Form3);