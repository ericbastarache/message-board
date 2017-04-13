"use strict";

import React from "react";

const Header = 	({ headerText }) => {
	return (
		<div>
			<hr></hr>
			<p>{ headerText }</p>
		</div>
	)
}

Header.propTypes = {
	headerText: React.propTypes.string
}

export default.Header;
