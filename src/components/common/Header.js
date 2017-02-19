import React, {PropTypes} from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

// const style = {
// 	container: {
// 		position: 'relative'
// 	},
// 	refresh: {
// 		display: 'inline-block',
// 		position: 'relative'
// 	}
// };

const Header = ({loading}) => {
	return (
		<div>
			Header is coming.....
			<RefreshIndicator
				left={0}
				top={0}
				size={25}
				status={loading ? 'loading' : 'hide'}
			/>
		</div>
	);
};

Header.propTypes = {
	loading: React.PropTypes.bool.isRequired
};

export default Header;
