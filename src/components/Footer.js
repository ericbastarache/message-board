"use strict";

import React from "react";

const Footer = 	({ footerText }) => {
	return (
		<div>
			<hr></hr>
			<p>{ footerText }</p>
		</div>
	)
}

Footer.propTypes = {
	footerText: React.propTypes.string;
}

export default.Footer;
