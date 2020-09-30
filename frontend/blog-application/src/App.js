import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Post from './components/Post';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/post' component={Post} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Blog} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
