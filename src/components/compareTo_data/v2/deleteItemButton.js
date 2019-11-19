import React from 'react';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteItemButton = ({deleteHandler}) => {
	return (
		<IconButton
			tooltip="Delete"
			tooltipPosition="bottom-center"
			onClick={deleteHandler}
			style={{
				display: 'inline-block'
			}}
		>
			<DeleteIcon fontSize="small"/>
		</IconButton>
	)
};

DeleteItemButton.propTypes = {
	deleteHandler: PropTypes.func.isRequired
};

export default DeleteItemButton;
