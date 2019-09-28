import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

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
        }).catch((err)=>{
            console.log(err);
        })
    }

    deleteBtn = (id)=>{
        axios.delete('/feedback/'+ id)
        .then((result)=>{
            this.getFeedback();
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleFlag = (boolean, id)=>{
        let thing = !boolean;
        axios.put('/feedback/'+ id +"/"+thing)
        .then((result)=>{
            this.getFeedback();
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
                    <th>Flag for Review</th> 
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.feedback.map((item)=>{
                    return(<tr key={item.id}>
                        <td>{item.feeling}</td>
                        <td>{item.understanding}</td>
                        <td>{item.support}</td>
                        <td>{item.comments}</td>
                        {item.flagged?
                        <td><button onClick={()=>this.handleFlag(item.flagged, item.id)}>Falgged</button></td>:
                        <td><button onClick={()=>this.handleFlag(item.flagged, item.id)}>Flag</button></td>
                        }
                        <td><button onClick={()=>this.deleteBtn(item.id)}>Delete</button></td>
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