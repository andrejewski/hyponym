
var Hyponym = require("./");

module.exports = function Struct(schemaName, schema) {
	if(typeof schemaName === 'string') {
		schemaName = ':'+schemaName;
	} else {
		schema = schemaName;
		schemaName = "";
	}
	schema = schema || {};
	var struct = Hyponym.Object.subtype({
		name: 'Struct'+schemaName,
		validate: function(obj) {
			for(var key in schema) {
				if(!schema.hasOwnProperty(key)) continue;
				if(!schema[key].validate(obj[key])) return false;
			}
			return true; 
		}
	});

	struct.set = function(key, Type) {
		schema[key] = Type;
	}

	struct.get = function(key) {
		return schema[key];
	}

	return struct;
}

