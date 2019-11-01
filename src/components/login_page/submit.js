import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import FlatButton from "material-ui/FlatButton";

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
				containerElement={<Link to="/base-data"/>}
			/>
		</div>
	);
};

SubmitButton.propTypes = {
	disabled: React.PropTypes.bool.isRequired
};

export default SubmitButton;
