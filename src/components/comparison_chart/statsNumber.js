import React from 'react';

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
	number: React.PropTypes.number.isRequired,
	description: React.PropTypes.string.isRequired
};

export default statsNumber;
