const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const ENTRY = './src/index.js';
const OUTPUT = path.resolve(__dirname, '../dist/');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: ENTRY,
	output: {
		path: OUTPUT,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: [
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};
