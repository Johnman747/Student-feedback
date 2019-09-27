import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home'
import Form1 from '../Form1/Form1';
import Form2 from '../Form2/From2';
import Form3 from '../Form3/From3';
import Form4 from '../Form4/Form4';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin'


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
          <Route path='/' exact render={()=><Home/>}/>
          <Route path='/1' render={()=><Form1/>}/>
          <Route path='/2' render={()=><Form2/>}/>
          <Route path='/3' render={()=><Form3/>}/>
          <Route path='/4' render={()=><Form4/>}/>
          <Route path='/5' render={()=><Thanks/>}/>
          <Route path='/admin' render={()=><Admin/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
