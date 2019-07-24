import React from 'react';

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
	countryCode: React.PropTypes.string.isRequired
};

export default flag;
