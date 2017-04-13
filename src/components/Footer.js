import React, { PropTypes } from "react";

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
