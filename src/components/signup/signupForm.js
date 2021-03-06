import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import {blue, green} from "@material-ui/core/colors";
import {Paper} from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles(theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(4,3),
		marginTop: theme.spacing(12),
		width: '400px',
		position: "absolute",
		transition: 'box-shadow .3s'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: green[500]
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	circularProgress: {
		color: blue[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -7,
		marginLeft: -12
	},
	wrapper: {
		position: 'relative'
	}
}));

const SignupForm = ({loading, onSubmitClick, onInputChange, onUsernameEnter, errorMessage}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<Avatar className={classes.avatar}>
				<PersonAddIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<form className={classes.form} onSubmit={onSubmitClick}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							name="firstName"
							required
							fullWidth
							id="firstName"
							label="First Name"
							autoFocus
							autoComplete="fname"
							disabled={loading}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="lname"
							disabled={loading}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							disabled={loading}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="countryOrigin"
							label="Country of Origin"
							id="countryOrigin"
							autoComplete="countryOrigin"
							onChange={onInputChange}
							disabled={loading}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="username"
							label="Username"
							id="username"
							autoComplete="current-username"
							disabled={loading}
							onChange={onUsernameEnter}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							disabled={loading}
							onChange={onInputChange}
						/>
					</Grid></Grid>
				<div className={classes.wrapper}>
					<Button
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
						type="submit"
						disabled={loading}
					>
						Sign Up
					</Button>
					{loading && <CircularProgress size={24} className={classes.circularProgress}/>}
				</div>
				{errorMessage}
			</form>
		</Paper>
	);
};

SignupForm.propTypes = {
	onSubmitClick: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired,
	errorMessage: PropTypes.string,
	onUsernameEnter: PropTypes.func
};

export default SignupForm;
