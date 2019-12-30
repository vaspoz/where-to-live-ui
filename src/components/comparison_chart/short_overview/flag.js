import React from 'react';
import PropTypes from "prop-types";

const flag = ({countryCode}) => {
	const src = `https://www.countryflags.io/${countryCode}/flat/64.png`;
	return (
		<img src={src}></img>
	);
};

flag.propTypes = {
	countryCode: PropTypes.string.isRequired
};

export default flag;
