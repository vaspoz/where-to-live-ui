import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const styles = {
	container: {
		paddingTop: 50
	}
};

const SubmitButton = ({disabled, clickEvent, label}) => {
	return (
		<div style={styles.container}>
			<RaisedButton
				label={label}
				disabled={disabled}
				onMouseDown={clickEvent}
			/>
		</div>
	);
};

SubmitButton.propTypes = {
	disabled: React.PropTypes.bool.isRequired
};

export default SubmitButton;
