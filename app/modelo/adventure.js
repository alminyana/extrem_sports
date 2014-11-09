
var mongoose = require('mongoose');

var AdventureSchema = mongoose.model('Adventure', {
	nombre: String,
	descripcion: String,
	semanas: Number,
	url: String,
	clave: [String]
});


module.exports = AdventureSchema;

