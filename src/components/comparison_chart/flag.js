import React from 'react';

const flag = ({countryCode}) => {
	const src = `https://www.countryflags.io/${countryCode}/flat/64.png`;
	return (
		<img src={src}></img>
	);
};

flag.propTypes = {
	countryCode: React.PropTypes.string.isRequired
};

export default flag;
