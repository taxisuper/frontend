var http = require('http');
var fs = require('fs');
var express = require('express');
var jsonServer = require('json-server');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var compiler = webpack(config);

var port = 9999;
var twitterConfigFile = './twitter.json';

function noCache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

var app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use('/api', noCache, jsonServer.router(__dirname + '/db.json'));
app.use(express.static('public'));
// Send index.html for all other routes
app.use(function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app);

server.listen(port, function() {
  console.log("Server started on port " + port);
});

if (fs.existsSync(twitterConfigFile)) {
  var twitterConfig = require(twitterConfigFile);
  require('./twitter-ws')(server, twitterConfig);
}
