import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Layouts
import MainLayout from "./components/main-layout";

// Pages
import Index from "./components/home";
import Test from "./components/test";
export default (
	<Router history={browserHistory}>
		<Route>
			<Route path="/" component={Index} />
			<Route path="/test" component={Test} />
		</Route>
	</Router>
)
