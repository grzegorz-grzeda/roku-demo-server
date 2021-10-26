var express = require('express');
var path = require('path');
var logger = require('morgan');
var PORT = 3000
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// error handler for invalid route
app.use(function(req, res) {
  res.send(404)
});

app.listen(PORT, console.log(`Listening @ port ${PORT}`))