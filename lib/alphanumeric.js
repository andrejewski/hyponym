
var Hyponym = require('hyponym');

module.exports = Hyponym.String.subtype({
	name: 'Alphanumeric',
	validate: function(val) {
		return /^[a-zA-Z0-9]*$/.test(val);
	}
});
