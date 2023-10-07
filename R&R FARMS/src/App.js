// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Features from './components/Features';
import Events from './components/Events';
import Contact from './components/Contact';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/features" component={Features} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
