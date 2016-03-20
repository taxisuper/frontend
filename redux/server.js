var fs = require('fs');
var http = require('http');
var util = require('util');
var express = require('express');
var history = require('connect-history-api-fallback');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var port = 9999;
var twitterConfigFile = './twitter.json';

var app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));
app.use(history({
    logger: console.log.bind(console)
}));
app.use(express.static('public'));

app.use(function(err, req, res, next){
    console.error(err.stack);
    next(err);
});

app.use(function(err, req, res, next) {
    util.inspect(err);
    res.status(500).send({ error: err.message });
});

var server = http.createServer(app);

server.listen(port, function() {
    console.log("Server started on port " + port);
});

if (fs.existsSync(twitterConfigFile)) {
    var twitterConfig = require(twitterConfigFile);
    require('./twitter-ws')(server, twitterConfig);
}