
var Hyponym = require("./");

module.exports = function ArrayList(Type) {
	var name = 'ArrayList('+Type.name()+')';
	return Hyponym.Array.subtype({
		name: name,
		validate: function(vals) {
			return !~vals.map(Type.validate).indexOf(false);
		}
	});
}
