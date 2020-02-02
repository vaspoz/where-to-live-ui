import React from 'react';
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AboutPageForm from "./aboutPageForm";

class AboutPage extends React.Component {
	render() {
		return (
			<Container maxWidth={'xs'}>
				<CssBaseline/>
				<AboutPageForm/>
			</Container>
		);
	}
}

export default AboutPage;
