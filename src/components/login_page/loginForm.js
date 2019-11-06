import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from "prop-types";
import * as globalActions from "../redux/actions/GlobalSettingsActions";
import * as countryActions from "../redux/actions/CountryActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {green, blue} from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	circularProgress: {
		color: blue[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	paper: {
		margin: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	wrapper: {
		marginTop: theme.spacing(3),
		position: 'relative'
	},
	submit: {
		margin: theme.spacing(0),
		backgroundColor: blue[500],
		'&:hover': {
			backgroundColor: blue[700]
		}
	}
}));

const LoginForm = ({onClick, loading}) => {
	const classes = useStyles();

	return (
		<div className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon/>
			</Avatar>
			<Typography component="h1" variant="h5">
				Log In
			</Typography>
			<form className={classes.form} noValidate>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
				/>
				<div className={classes.wrapper}>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						disabled={loading}
						className={classes.submit}
						onClick={onClick}
					>
						Sign In
					</Button>
					{loading && <CircularProgress size={24} className={classes.circularProgress}/>}
				</div>
			</form>
		</div>
	)
};

export default LoginForm;
