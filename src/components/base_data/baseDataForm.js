import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(5, 3),
		margin: theme.spacing(15, 3),
		height: '400px',
		width: '350px',
		position: "absolute",
		transition: 'box-shadow .3s'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	buttonsWrapper: {
		marginTop: theme.spacing(3)
	},
	submit: {
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: theme.palette.primary.dark
		}
	},
	reset: {
		backgroundColor: theme.palette.secondary.main,
		'&:hover': {
			backgroundColor: theme.palette.secondary.dark
		}
	},
	autocomplete: {
		width: '250px',
		marginTop: theme.spacing(3)
	}
}));

const BaseDataForm = ({
												countryList,
												cityList,
												onCountrySelect,
												onCitySelect,
												onSubmit,
												countryInputDisabled,
												cityInputDisabled,
												submitDisabled,
												onReset,
												countryValue,
												cityValue
											}) => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Avatar className={classes.avatar}>
				<FlightTakeoffIcon/>
			</Avatar>
			<Typography component="h1" variant="h5">
				Base Data Input
			</Typography>
			<Autocomplete
				id="base-country"
				options={countryList}
				getOptionLabel={country => country}
				disabled={countryInputDisabled || !!countryValue}
				value={countryValue}
				className={classes.autocomplete}
				onChange={onCountrySelect}
				renderInput={params => (
					<TextField {...params} label="Country" fullWidth/>
				)}
			/>
			<Autocomplete
				id="base-city"
				options={cityList}
				disabled={cityInputDisabled || !!cityValue}
				value={cityValue}
				getOptionLabel={city => city}
				className={classes.autocomplete}
				onChange={onCitySelect}
				renderInput={params => (
					<TextField {...params} label="City" fullWidth/>
				)}
			/>
			<Grid container justify="center" spacing={6} className={classes.buttonsWrapper}>
				<Grid key={1} item>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						disabled={submitDisabled}
						className={classes.reset}
						onClick={onReset}
					>
						Reset
					</Button>
				</Grid>
				<Grid key={2} item>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						disabled={submitDisabled}
						className={classes.submit}
						onClick={onSubmit}
					>
						Submit
					</Button>
				</Grid>
			</Grid>
		</Paper>
	)
};

BaseDataForm.propTypes = {
	submitDisabled: PropTypes.bool.isRequired,
	countryList: PropTypes.array.isRequired,
	cityList: PropTypes.array.isRequired,
	onCountrySelect: PropTypes.func.isRequired,
	onCitySelect: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	countryInputDisabled: PropTypes.bool.isRequired,
	cityInputDisabled: PropTypes.bool.isRequired,
	countryValue: PropTypes.string,
	cityValue: PropTypes.string
};

export default BaseDataForm;
