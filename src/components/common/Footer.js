import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';

const Footer = () => {
	return (
		<Paper zDepth={5} className="footer-paper">
			<div className="footer-text">
				Made with ♥ by Vasilii Pozdeev in Gdansk 2017
			</div>
		</Paper>
	);
};

export default Footer;
