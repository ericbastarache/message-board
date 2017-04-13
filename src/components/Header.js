import React from "react";
import PropTypes from 'prop-types';

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
