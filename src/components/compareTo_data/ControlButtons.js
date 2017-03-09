import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const ControlButtons = ({addNewSelectionEventHandler}) => {
	return (
		<div className="bottom-button">
			<RaisedButton
				label="Add"
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
	addNewSelectionEventHandler: React.PropTypes.func.isRequired
};

export default ControlButtons;
