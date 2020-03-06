// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
	primary: { main: '#03A9F4' },
	secondary: { main: '#D81B60' }
};
const themeName = 'Cerulean Amaranth Geckos';

export default createMuiTheme({ palette, themeName });
