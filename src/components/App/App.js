import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Form1 from '../Form1/Form1';
import Form2 from '../Form2/From2';
import Form3 from '../Form3/From3';
import Form4 from '../Form4/Form4'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route path='/' exact render={()=><Form1/>}/>
          <Route path='/2' render={()=><Form2/>}/>
          <Route path='/3' render={()=><Form3/>}/>
          <Route path='/4' render={()=><Form4/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
