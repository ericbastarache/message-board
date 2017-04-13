import React, { PropTypes } from "react";

const Header = 	({ headerText }) => {
	return (
		<div>
			<hr></hr>
			<p>{ headerText }</p>
		</div>
	)
}

Header.propTypes = {
	headerText: PropTypes.string
}

export default Header;
