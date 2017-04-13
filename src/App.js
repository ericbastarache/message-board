import React, { Component } from "react";
import ReactDOM from "react-dom"

<<<<<<< HEAD
import Router from "./router"

ReactDOM.render(
  document.getElementById("root")
)
=======
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
>>>>>>> 92d96b43df7144f77b74873f8ff401a9808446f5
