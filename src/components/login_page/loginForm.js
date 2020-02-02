import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {blue} from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	circularProgress: {
		color: blue[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(4, 3),
		margin: theme.spacing(25, 3),
		height: '400px',
		width: '350px',
		position: "absolute",
		transition: 'box-shadow .3s',
		"&:hover": {
			boxShadow: '0 4px 20px 0 rgba(0,0,0,.16)'
		}
	},
	form: {
		width: '250px'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	wrapper: {
		marginTop: theme.spacing(5),
		position: 'relative'
	},
	submit: {
		margin: theme.spacing(0),
	}
}));

const handleEnterKey = (functionHandler) => {
	return (event) => {
		if (event.keyCode === 13)
			functionHandler(event);
	};
};

const LoginForm = ({loading, onSubmitClick, onUsernameEnter, onPasswordEnter, errorMessage}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon/>
			</Avatar>
			<Typography component="h1" variant="h5">
				Log In
			</Typography>
			<form className={classes.form}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					name="username"
					onChange={onUsernameEnter}
					onKeyDown={handleEnterKey(onSubmitClick)}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					onChange={onPasswordEnter}
					onKeyDown={handleEnterKey(onSubmitClick)}
				/>
				<div className={classes.wrapper}>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						disabled={loading}
						className={classes.submit}
						onClick={onSubmitClick}
					>
						Sign In
					</Button>
					{loading && <CircularProgress size={24} className={classes.circularProgress}/>}
				</div>
				{errorMessage}
			</form>
		</Paper>
	);
};

LoginForm.propTypes = {
	loading: PropTypes.bool.isRequired,
	onSubmitClick: PropTypes.func.isRequired,
	onUsernameEnter: PropTypes.func.isRequired,
	onPasswordEnter: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired
};

export default LoginForm;
