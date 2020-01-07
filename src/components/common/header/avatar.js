import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const LogoutLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/" {...props} />);

const Avatar = ({isVisible, onClickAction}) => {
	const classes = useStyles();

	return (
		<div>
			{isVisible && <Button
				variant="contained"
				color="primary"
				className={classes.button}
				component={LogoutLink}
				onClick={onClickAction}
			>
				Logout
			</Button>}
		</div>
	);
};

Avatar.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	onClickAction: PropTypes.func.isRequired
};

export default Avatar;
