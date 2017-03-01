import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';

const style = {
	paper: {
		height: 'inherit'
	}
};

const Footer = () => {
	return (
		<Paper zDepth={5} style={style.paper}>
			<div className="footer-text">
				Made with ♥ by Vasilii Pozdeev in Gdansk 2017
			</div>
		</Paper>
	);
};

export default Footer;
