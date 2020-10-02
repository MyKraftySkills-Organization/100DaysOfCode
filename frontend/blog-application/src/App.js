import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './containers/About';
import Blog from './containers/Blog';
import Post from './containers/Post';
import Contact from './containers/Contact';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/post' component={Post} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={Blog} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
