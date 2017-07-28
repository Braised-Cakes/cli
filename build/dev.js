const express = require('express')
const app = express()
const webpack = require('webpack')
const config = require('../config.js')
const opn = require('opn')
const webpackConfig = require('./webpack.dev.js')
const compiler = webpack(webpackConfig)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => {},
	heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({ action: 'reload' })
		cb()
	})
})
let uri = 'http://localhost:8000/'
app.use(devMiddleware)
app.use(hotMiddleware)
app.listen(config.port, (err) => {
	opn(uri)
})
