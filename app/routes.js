var Adventure = require('./modelo/adventure.js');
var Controller = require('./controller.js');

module.exports = function (app) {
	app.post('/servicioAventuras', Controller.setAventura);
	app.get('/servicioAventuras', Controller.getTodas);
}