import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/home';
import Test from './components/test';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Header headerText="Message Board Application"/>
						<Route exact path="/" component={Index} />
            <Route path="/messages" component={Test} />
            <Footer footerText="Copyright 2017"/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
