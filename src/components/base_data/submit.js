import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const styles = {
	container: {
		paddingTop: 50
	}
};

const SubmitButton = ({disabled}) => {
	return (
		<div style={styles.container}>
			<RaisedButton
				label="Submit"
				disabled={disabled}
				containerElement={<Link to="/dreams"/>}
			/>
		</div>
	);
};

SubmitButton.propTypes = {
	disabled: React.PropTypes.bool.isRequired
};

export default SubmitButton;
