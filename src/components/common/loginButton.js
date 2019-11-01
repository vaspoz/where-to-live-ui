import FlatButton from "material-ui/FlatButton";
import React from "react";
import {Link} from "react-router";

const style = {
	marginRight: "10px",
	color: "blue"
};

const LoginButton = ({isVisible}) => {
	return (
		<div style={isVisible ? {} : {display: "none"}}>
			<FlatButton
				style={style}
				label="Log In"
				containerElement={<Link to="/login"/>}
			/>
		</div>
	);
};

LoginButton.propTypes = {
	isVisible: React.PropTypes.bool.isRequired
};

export default LoginButton;
