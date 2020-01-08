import React from 'react';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	icon: {
		verticalAlign: "bottom"
	}
}));

const DeleteItemButton = ({deleteHandler}) => {
	const classes = useStyles();
	return (
		<IconButton onClick={deleteHandler} className={classes.icon}>
			<DeleteIcon fontSize="small"/>
		</IconButton>
	);
};

DeleteItemButton.propTypes = {
	deleteHandler: PropTypes.func.isRequired
};

export default DeleteItemButton;
