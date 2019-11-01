import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router";
import React from "react";

const style = {
	marginRight: "10px"
};

const SignupButton = ({isVisible}) => {
	return (
		<div style={isVisible ? {} : {display: "none"}}>
			<RaisedButton
				style={style}
				label="Sign Up"
				containerElement={<Link to="/signup"/>}
			/>
		</div>
	);
};

SignupButton.propTypes = {
	isVisible: React.PropTypes.bool.isRequired
};

export default SignupButton;
