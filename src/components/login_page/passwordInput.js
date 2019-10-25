import React from 'react';
import TextField from 'material-ui/TextField'

const PasswordInput = () => {
	return (
		<div>
			<TextField
				id="login-user-name"
				type="password"
				label="User Name"
			/>
		</div>
	);
};

PasswordInput.propTypes = {
};

export default PasswordInput;
