
var Hyponym = require("./");

module.exports = function Either(TypeA, TypeB) {
	var name = 'Either('+TypeA.name()+','+TypeB.name()+')';
	return Hyponym({
		name: name,
		validate: function(val) {
			return TypeA.validate(val) || TypeB.validate(val);
		},
		serialize: function(val) {
			return TypeA.validate(val)
				? TypeA.serialize(val) 
				: TypeB.serialize(val);
		}
	});
}
