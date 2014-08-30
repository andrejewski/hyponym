
var Hyponym = require("./");

module.exports = function Tuple(Types) {
	var names = Types.map(function(t) {
			return t.name();
		}),
		name = 'Tuple('+names.join(',')+')';
	return Hyponym.Array.subtype({
		name: name,
		validate: function(vals) {
			return vals.length === Types.length && !~vals.map(function(val, index) {
				return Types[index].validate(val);
			}).indexOf(false);
		},
		serialize: function(vals) {
			return vals;
		}
	});
}
