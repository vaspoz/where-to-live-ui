import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiInline from "./emojiComponent";
import NumberedList from "./numberedList";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(15),
		height: 480,
		width: 900,
		position: "absolute"
	},
	header: {
		backgroundColor: theme.palette.primary.light,
		color: 'white'
	},
	numbers: {
		backgroundColor: theme.palette.secondary.light,
		height: 35,
		width: 35,
		marginRight: 10
	}
}));

const AboutPageForm = () => {
	const classes = useStyles();

	return (
		<Card className={classes.paper} variant="outlined">
			<CardHeader
				avatar={
					<MenuBookIcon color="action"/>
				}
				title={
					<Typography variant="h5">
						Welcome 🎉
					</Typography>
				} className={classes.header}/>
			<CardContent>
				<Typography variant="body1" color="textPrimary" align="justify" paragraph>
					<span style={{marginLeft: 15}}/>
					Dear <Typography variant="inherit" color="secondary">visitor</Typography>, this webapplication is just a small
					(but very proud <EmojiInline emoji={'😎'}/>) <Typography variant="inherit" color="secondary">home
					project</Typography> to
					keep my IT knowledge <EmojiInline emoji={'👨🏽‍💻‍'}/>up to date.
					So don't be surprised <EmojiInline emoji={'🙀'}/>by various features which maybe not needed.
					For example, the authorization<EmojiInline emoji={'🕵🏽‍♂️'}/>️ - c'mon we both know that it's too much
					for so small app, right? But who cares,<Typography variant="inherit" color="secondary"> I can do here
					whatever I want</Typography>, right? <EmojiInline emoji={'😈'}/>
				</Typography>
				<Typography variant="body1" color="textPrimary" align="justify" paragraph>
					<span style={{marginLeft: 15}}/>
					Alright, after that small (but again - proud) disclaimer, you'd like to know - what is that all about, huh? So
					here're the
					main points:
				</Typography>
				<NumberedList number={1}
											text="Aliyah will help you to compare salary/expenses of your current location (country/city) with locations you'd like to relocate to."/>
				<NumberedList number={2}
											text="Firstly, you need to login/signup. Then you'll chose your current location. After that you'll provide a list of countries to compare."/>
				<NumberedList number={3}
											text="Use the bottom buttons to navigate through the site. Play around and text me if you have an excellent idea about improvements."/>
				<NumberedList number={4}
											text={"Remember - everything was developed by only myself, so it's bug-free (obviously). If you find something, it's meant to be there"}/>
			</CardContent>
		</Card>
	);
};

AboutPageForm.propTypes = {};

export default AboutPageForm;
