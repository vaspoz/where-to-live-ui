import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
	'process.env.NODE_ENB': JSON.stringify('production')
};
export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: './src/index',
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
			{
				test: /\.(jpg|png|gif|svg)$/i, loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
			},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},       // Remove it
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},  // Remove it
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}              // Remove it
		]
	}
};
