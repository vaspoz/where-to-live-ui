import React from 'react';
import PropTypes from "prop-types";

const style = {
	bigNumbers: {
		height: "100px",
		paddingTop: "15px"
	},
	number: {
		fontSize: "50pt",
		fontWeight: "bold"
	},
	description: {}
};

const statsNumber = ({number, description}) => {
	return (
		<div>
			<div style={style.bigNumbers}>
				<div style={style.number}>{number}</div>
				<div style={style.description}>{description}</div>
			</div>
		</div>
	)
};

statsNumber.propTypes = {
	number: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired
};

export default statsNumber;
