var path = require('path')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
console.log(resolve('src'))
module.exports = {
	entry: {
		app: './src/index.js'
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: [resolve('src')]
		}, {
			test: /\.art$/,
			loader: "art-template-loader"
		}]
	}
}
