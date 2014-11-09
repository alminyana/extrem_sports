var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

//BD localhost connect
mongoose.connect('mongodb://localhost:27017/extrem', function (error) {
	if (error) {
		throw error;
	} else {
		console.log('.... Conectado a MongoDB')
	}
});

//BD MongoLab connect
//mongoose.connect('mongodb://testinguser:testingtesting@ds043220.mongolab.com:43220/testing');


app.use(express.static(__dirname + '/public'));
//app.use(express.logger('dev'));
app.use(bodyParser.json());

//simulate DELETE and PUT http methods
//app.use(express.methodOverride());

//importar las rutas
//require('./app/routes')(app);

//conectar el servidor escuchando por el puerto(var port)
app.listen(port, function(){
	console.log('extrem app listening : ' + port);
});