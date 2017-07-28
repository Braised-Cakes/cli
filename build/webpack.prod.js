const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const cwd = process.cwd()
var HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.js')
module.exports = merge(baseWebpackConfig, {
	entry: path.resolve(cwd, 'src/index.js'),
	output: {
		path: path.resolve(cwd, 'dist'),
		filename: 'js/[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			inject: true,
			chunksSortMode: 'dependency'
		})
	]
});
