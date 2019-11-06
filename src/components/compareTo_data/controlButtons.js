import React from 'react';
import PropTypes from "prop-types";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const ControlButtons = ({addNewSelectionEventHandler, addButtonDisabled}) => {
	return (
		<div className="bottom-button">
			<RaisedButton
				label="Add"
				disabled={addButtonDisabled}
				style={{margin: 5}}
				onClick={addNewSelectionEventHandler}
			/>
			<RaisedButton
				label="Submit"
				containerElement={<Link to="/comparison-chart"/>}
			/>
		</div>
	);
};

ControlButtons.propTypes = {
	addNewSelectionEventHandler: PropTypes.func.isRequired,
	addButtonDisabled: PropTypes.bool.isRequired
};

export default ControlButtons;
