
var Hyponym = require("./");

module.exports = Hyponym.String.subtype({
	name: 'Alphanumeric',
	validate: function(val) {
		return /^[a-zA-Z0-9]*$/.test(val);
	}
});
