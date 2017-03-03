if (process.env.NODE_ENV === 'production') {
	module.exports = require('./CofigureStore.prod');
} else {
	module.exports = require('./CofigureStore.dev');
}
