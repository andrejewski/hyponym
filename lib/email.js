
var Hyponym = require("./");

module.exports = Hyponym.String.subtype({
	name: 'Email',
	validate: function(val) {
		return /@/.test(val);
	}
});

