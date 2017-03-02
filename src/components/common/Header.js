import React, {PropTypes} from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Paper from 'material-ui/Paper';

const style = {
	refresh: {
		display: 'inline-block',
		position: 'relative'
	}
};

const Header = ({loading}) => {
	return (
		<Paper zDepth={2} className="header-paper">
			<RefreshIndicator
				left={0}
				top={0}
				size={25}
				style={style.refresh}
				status={loading? 'loading': 'hide'}
			/>
		</Paper>
	);
};

Header.propTypes = {
	loading: React.PropTypes.bool.isRequired
};

export default Header;
