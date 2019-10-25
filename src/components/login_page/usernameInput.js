import React from 'react';
import TextField from 'material-ui/TextField'

const UsernameInput = () => {
	return (
		<div>
			<TextField
				id="login-user-name"
				label="User Name"

			/>
		</div>
	);
};

UsernameInput.propTypes = {
};

export default UsernameInput;
