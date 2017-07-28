const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.js')
const rm = require('rimraf')
const ora = require('ora')
const chalk = require('chalk')
const spinner = ora('building for production...')
spinner.start()
rm('dist/', (err) => {
	if (err) throw err
	webpack(webpackConfig, function(err, stats) {
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n\n')
		console.log(chalk.cyan('  Build complete.\n'))
		console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' + '  Opening index.html over file:// won\'t work.\n'))
	})
})
