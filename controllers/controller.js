var locationModel = require('../models/data.js');

var locationController = function(req, res) {
	res.render('index', {
		location: locationModel.findLocation(req.params.target)
	});
};

module.exports = {
	locationController: locationController
};