import React from "react";
import { elementType } from 'react-prop-types';

const Footer = 	({ footerText }) => {
	return (
		<div>
			<hr></hr>
			<p>{ footerText }</p>
		</div>
	)
}

Footer.propTypes = {
	footerText: PropTypes.string
}

export default Footer;
