import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	},
	input: {
		display: 'none'
	}
}));

const Avatar = ({clickEvent, isVisible}) => {
	const classes = useStyles();

	return (
		<div style={isVisible ? {} : {display: "none"}}>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				href="/logout"
				onClick={clickEvent}
			>
				Logout
			</Button>
		</div>
	);
};

Avatar.propTypes = {
	isVisible: PropTypes.bool.isRequired
};

export default Avatar;
