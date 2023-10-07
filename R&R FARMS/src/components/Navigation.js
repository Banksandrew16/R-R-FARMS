import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

// src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="content">
      <h2>About Us</h2>
      {/* Add content about R&R Farms */}
    </div>
  );
}

export default About;

// Similar components for Features, Events, Contact, and Shop

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Features from './components/Features';
import Events from './components/Events';
import Contact from './components/Contact';
import Shop from './components/Shop';
import './App.css'; // Import your CSS for styling

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>R&R Farms</h1>
        </header>
        <Navigation />
        <main className="main">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/features" component={Features} />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </main>
        <footer className="footer">
          {/* Add footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
