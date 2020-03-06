// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
	primary: { main: '#8bc34a', contrastText: '#ffffff' },
	secondary: { main: '#FF8A65', contrastText: '#ffffff' }
};
const themeName = 'Sushi Salmon Kangaroo';

export default createMuiTheme({ palette, themeName });
