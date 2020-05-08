/* eslint-disable import/default */
/* eslint-disable import/namespace */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiInline from "./emojiComponent";
import NumberedList from "./numberedList";
import TechLogo from './techLogo';
import reactLogo from '../../images/react.png';
import javaLogo from "../../images/java.png";
import reduxLogo from "../../images/redux.png";
import materialUILogo from "../../images/materialUI.svg";
import npmLogo from "../../images/npm.png";
import mavenLogo from "../../images/maven.png";
import springLogo from "../../images/spring.png";
import postgresLogo from "../../images/postgres.png";
import awsLogo from "../../images/aws.png";
import jenkinsLogo from "../../images/jenkins.png";
import dockerLogo from "../../images/docker.png";
import yeomanLogo from "../../images/yeoman.png";
import webpackLogo from "../../images/webpack.png";
import githubLogo from "../../images/github.png";
import tomcatLogo from "../../images/tomcat.png";
import nginxLogo from "../../images/nginx.png";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(15),
		height: 560,
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

const logos = [githubLogo, yeomanLogo, awsLogo, jenkinsLogo, dockerLogo,
	reactLogo, reduxLogo, materialUILogo, npmLogo, webpackLogo, javaLogo,
	mavenLogo, springLogo, postgresLogo, tomcatLogo, nginxLogo];

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
					For example, the authorization<EmojiInline emoji={'🕵🏽‍♂️'}/>️ is not mandatory needed. I implemented it
					only for the purpose of education.
					The service is completely free, you can use it by clicking on 'Try Me' button.
					However, I'm gonna to extend functionality for authorized users in future.
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
											text="Use the bottom buttons to navigate through the site. Play around and text me if you have an excellent idea about improvements."/>
				<NumberedList number={3}
											text={"Remember - everything was developed by only myself, so it's bug-free (obviously). If you find something, it's meant to be there"}/>
				<br/>
				<Grid container justify="center">
					{logos.map(logoImg => {
						return (<Grid key={logoImg} item>
							<TechLogo source={logoImg} height={48}/>
						</Grid>);
					})}
				</Grid>
			</CardContent>
		</Card>
	);
};

AboutPageForm.propTypes = {};

export default AboutPageForm;
