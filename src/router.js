import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Layouts
import MainLayout from "./components/main-layout";

// Pages
import Home from "./components/index";

export default (
	<Router history={browserHistory}>

		<Route component={MainLayout}>
			<Route path="/" component={Home} />
		</Route>

	</Router>
)

/* App.js currently
import { BrowserRouter as Router, Route } from 'react-router-dom';
<Router>
	<div>
		<div>
			<Header headerText="Message Board Application"/>
			<br /><p>This is a homepage</p><br />
			<Footer footerText="Copyright 2017"/>
		</div>
	</div>
	<Route exact path="/" component={Home} />
	<Route path="/messages" component={MessageContainer} />
</Router>

*/
