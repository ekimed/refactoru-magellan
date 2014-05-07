var Location = function(name, description, next, id){
	this.name = name,
	this.description = description,
	this.next = next,
	this.id = id
}

var seville = new Location('Seville', 'Destination 1', 'canaryIslands', 'seville');
var canaryIslands = new Location('Canary Islands', 'Destination 2', 'capeVerde', 'canaryIslands');
var capeVerde = new Location('Cape Verde', 'Destination 3', 'straitOfMagellan', 'capeVerde');
var straitOfMagellan = new Location('Strait of Magellan', 'Destination 4', 'guam', 'straitOfMagellan');
var guam = new Location('Guam', 'Destination 5', 'philippines', 'guam');
var philippines = new Location('Philippines', 'Destination 6', null, 'philippines');

var locations = [seville, canaryIslands, capeVerde, straitOfMagellan, guam, philippines];
var findLocation = function(target) {
	return locations.filter(function(loc){
		return loc.id === target;
	})[0];
}

module.exports = {
	findLocation: findLocation
};