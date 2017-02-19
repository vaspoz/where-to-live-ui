import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
				href={"/dreams"}
				disabled={disabled}
			/>
		</div>
	);
};

SubmitButton.propTypes = {
	disabled: React.PropTypes.bool.isRequired
};

export default SubmitButton;
