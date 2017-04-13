import React from "react";
import PropTypes from 'prop-types';

const Header = 	({ headerText }) => {
	return (
		<div>
			<p>{ headerText }</p>
			<hr></hr>
		</div>
	)
}

Header.propTypes = {
	headerText: PropTypes.string
}

export default Header;
