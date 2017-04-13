import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Message Board Application"/>
				<br /><p>This is a homepage</p><br />
        <Footer footerText="Copyright 2017"/>
      </div>
    );
  }
}

export default App;
