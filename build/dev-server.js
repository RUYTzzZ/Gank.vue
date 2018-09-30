const port = '3000'; // port to bind

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./dev-config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath : config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, () => console.log(`Please visit at http://localhost:${port}`))