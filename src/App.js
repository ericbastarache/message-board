import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div>
        <Header headerText="Message Board Application"/>
				<br /><p>This is a homepage</p><br />
        <Footer footerText="Copyright 2017"/>
      </div>
=======
      <Router>
        <div>
          <Header headerText="Message Board Application"/>
          <Footer footerText="Copyright 2017"/>
        </div>
      </Router>
>>>>>>> Stashed changes
    );
  }
}

export default App;
