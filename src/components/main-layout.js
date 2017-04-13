import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";

class MainLayout extends React.Component {
	render() {
		return (
			<div className="app">
				<div>
					<Header headerText="Message Board Application"/>
					{this.props.children}
					<Footer footerText="Copyright 2017"/>
				</div>
			</div>
		)
	}
}

export default MainLayout;
