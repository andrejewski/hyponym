
var Hyponym = require("./");

module.exports = Hyponym.Number.subtype({
	name: 'Integer',
	validate: function(val) {
		return val % 1 === 0;
	}
});
