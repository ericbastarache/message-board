import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Header headerText="Message Board Application"/>
            <br /><p>This is a homepage</p><br />
            <Footer footerText="Copyright 2017"/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
