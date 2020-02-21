import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

const GLOBALS = {
	'process.env.NODE_ENB': JSON.stringify('development'),
	baseURL: JSON.stringify('http://localhost:8080')
};
export default {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		'./src/index'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			favicon: './src/images/favicon.png',
			template: './src/index.html',
			inject: false
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},       // Remove it
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},  // Remove it
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}              // Remove it
		]
	}
};
