import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Landing from './screens/Landing/Landing';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/landing' component={Landing}/>
    </Router>
  );
}

export default App;
