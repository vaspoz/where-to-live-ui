import React from 'react';
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton';

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
			<DeleteIcon/>
		</IconButton>
	)
};

DeleteItemButton.propTypes = {
	deleteHandler: React.PropTypes.func.isRequired
};

export default DeleteItemButton;
