import React from 'react';
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
	addNewSelectionEventHandler: React.PropTypes.func.isRequired,
	addButtonDisabled: React.PropTypes.bool.isRequired
};

export default ControlButtons;
