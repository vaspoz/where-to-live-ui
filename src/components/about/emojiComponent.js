import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const EmojiInline = ({emoji}) => {
	return (
		<Typography variant="inherit" style={{fontSize: 25}}>{emoji}</Typography>
	);
};

EmojiInline.propTypes = {
	emoji: PropTypes.string.isRequired
};

export default EmojiInline;
