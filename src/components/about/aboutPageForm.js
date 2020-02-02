import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles(theme => ({
	paper: {
		margin: theme.spacing(25, 3),
		height: '400px',
		maxWidth: 345,
		position: "absolute",
		// transition: 'box-shadow .3s',
		// "&:hover": {
		// 	boxShadow: '0 4px 20px 0 rgba(0,0,0,.16)'
		// }
	},
	header: {
		backgroundColor: theme.palette.primary.light,
		color: 'white'
	},
}));

const AboutPageForm = ({}) => {
	const classes = useStyles();

	return (
		<Card className={classes.paper} variant="outlined">
			<CardHeader
				avatar={
					<MenuBookIcon color="action" fontSize="medium"/>
				}
				title={
					<Typography variant="h5">
						Welcome
					</Typography>
				} className={classes.header}/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook together with your
					guests. Add 1 cup of frozen peas along with the mussels, if you like.
				</Typography>
			</CardContent>
		</Card>
	);
};

AboutPageForm.propTypes = {};

export default AboutPageForm;
