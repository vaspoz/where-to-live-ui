import React from 'react';
import PropTypes from "prop-types";

const flag = ({countryCode}) => {
	const src = `https://www.countryflags.io/${countryCode}/flat/64.png`;
	const style = {
		height: "50px",
		marginRight: '15px'
	};
	return (
		<img src={src} style={style}></img>
	);
};

flag.propTypes = {
	countryCode: PropTypes.string.isRequired
};

export default flag;
