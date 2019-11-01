import RaisedButton from "material-ui/RaisedButton";
import React from 'react';

const Avatar = ({clickEvent, isVisible}) => {
	return (
		<div style={isVisible ? {} : {display: "none"}}>
			<RaisedButton
				label="Logout"
				onMouseDown={clickEvent}
			/>
		</div>
	);
};

Avatar.propTypes = {
	isVisible: React.PropTypes.bool.isRequired
};

export default Avatar;
