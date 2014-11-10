var Aventura = require('./modelo/adventure.js');

exports.setAventura = function (req,res) {
	//console.log(req.body);
	Aventura.create(
		{nombre:req.body.nombre,descripcion: req.body.descrip,tiempo: req.body.tiempo, clave:req.body.clave},
		function (err, aventura) {
			if (err)  {
				res.send(err);
			}
			Aventura.find(function(err,aventura){
				if (err) {
					res.send(err);
				}
				res.json(aventura);
			});
		}
	);
};

exports.getTodas = function(req, res) {
	Aventura.find(function (err, aventuras) {
		if (err) {
			res.send(err);
		} else {
			res.json(aventuras);
		}

	});
};