
var Hyponym = require("./");

module.exports = function Maybe(Type) {
	var name = 'Maybe('+Type.name()+')';
	return Hyponym({
		name: name,
		validate: function(val) {
			return Type.validate(val) || val === null;
		},
		serialize: function(val) {
			return Type.validate(val) ? val : null;
		}
	});
}
