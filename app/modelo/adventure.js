
var mongoose = require('mongoose');

var AdventureSchema = mongoose.model('Adventure', {
	nombre: String,
	descripcion: String,
	tiempo: Number,
	url: String,
	clave: [String]
});


module.exports = AdventureSchema;

