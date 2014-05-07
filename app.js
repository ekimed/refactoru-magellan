var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controllers/controller.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser());

app.get('/:target', controller.locationController);

var server = app.listen(4338, function() {
	console.log('Express server listening on port ' + server.address().port);
});
