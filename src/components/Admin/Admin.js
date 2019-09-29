import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import {Table, TableBody, TableCell, TableHead, TableRow,Button} from '@material-ui/core'
import './Admin.css'

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
        ;
        if(window.confirm('Are you sure?')){
            axios.delete('/feedback/'+ id)
            .then((result)=>{
                this.getFeedback();
            }).catch((err)=>{
                console.log(err);
            })
        }
      
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
        <Table>
            <TableHead className='tableHead'>
                <TableRow>
                    <TableCell>Feelings</TableCell>
                    <TableCell>Understanding</TableCell>
                    <TableCell>Support</TableCell>
                    <TableCell>Comments</TableCell> 
                    <TableCell>Flag for Review</TableCell> 
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.feedback.map((item)=>{
                    return(<TableRow key={item.id}>
                        <TableCell>{item.feeling}</TableCell>
                        <TableCell>{item.understanding}</TableCell>
                        <TableCell>{item.support}</TableCell>
                        <TableCell>{item.comments}</TableCell>
                        {item.flagged?
                        <TableCell><Button variant="contained" className="flagged" onClick={()=>this.handleFlag(item.flagged, item.id)}>Unflag</Button></TableCell>:
                        <TableCell><Button variant="contained" onClick={()=>this.handleFlag(item.flagged, item.id)}>Flag</Button></TableCell>
                        }
                        <TableCell><Button variant="contained" onClick={()=>this.deleteBtn(item.id)}>Delete</Button></TableCell>
                    </TableRow>)

                })}
            </TableBody>
        </Table>
    </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
  })
export default connect(mapStateToProps)(Admin);