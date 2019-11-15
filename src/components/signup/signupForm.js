import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import {blue} from "@material-ui/core/colors";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(4,3),
		marginTop: theme.spacing(5),
		width: '400px',
		position: "absolute",
		transition: 'box-shadow .3s',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
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

const SignupForm = ({loading, onSubmitClick, onInputChange, errorMessage}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon/>
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<form className={classes.form} onSubmit={onSubmitClick}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							name="firstName"
							variant="outlined"
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
							variant="outlined"
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
							variant="outlined"
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
							variant="outlined"
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
							variant="outlined"
							required
							fullWidth
							name="username"
							label="Username"
							id="username"
							autoComplete="current-username"
							disabled={loading}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
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
						color="primary"
						className={classes.submit}
						type="submit"
						disabled={loading}
					>
						Sign Up
					</Button>
					{loading && <CircularProgress size={24} className={classes.circularProgress}/>}
				</div>
			</form>
		</Paper>
	);
};

SignupForm.propTypes = {
	onSubmitClick: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	onInputChange: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired
};

export default SignupForm;
