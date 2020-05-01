import React from 'react';
import PropTypes from "prop-types";

const TechImage = ({source, height}) => {
	return <img src={source} height={height}/>;
};

TechImage.propTypes = {
	source: PropTypes.string,
	height: PropTypes.number
};

export default TechImage;
