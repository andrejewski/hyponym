
var Hyponym = require("./");

module.exports = function Choice(Types) {
	var names = Types.map(function(t) {
			return t.name();
		}),
		name = 'Choice('+names.join(',')+')';
	return Hyponym({
		name: name,
		validate: function(val) {
			for(var index of Types) {
				if(Types[index].validate(val)) return true;
			}
			return false;
		}
	});
}
