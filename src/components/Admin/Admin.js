import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import { forOfStatement } from '@babel/types';

class  Admin extends Component {
    state={
        feedback: []
    }
    componentDidMount(){
        this.getFeedback();
    }

    getFeedback = ()=>{
        axios.get('/feedback')
        .then((result)=>{
            this.setState({
                feedback: result.data.rows
            })
            console.log(this.state.feedback)
        }).catch((err)=>{
            console.log(err);
        })
    }

render() {
    return (
    <Router>
        <h1>Admin Page</h1>
        <table>
            <thead>
                <tr>
                    <th>Feelings</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>  
                </tr>
            </thead>
            <tbody>
                {this.state.feedback.map((item)=>{
                    return(<tr key={item.id}>
                        <td>{item.feeling}</td>
                        <td>{item.understanding}</td>
                        <td>{item.support}</td>
                        <td>{item.comments}</td>
                    </tr>)

                })}
            </tbody>
        </table>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Admin);