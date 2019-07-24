import React from 'react';
import Paper from "material-ui/Paper";
import Flag from "./flag";
import RefreshIndicator from "material-ui/RefreshIndicator";

const style = {
	bigNumbers: {
		height: "125px",
		paddingTop: "25px"
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
