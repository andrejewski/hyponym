
function Hyponym(options) {
	if(!(this instanceof Hyponym)) return new Hyponym(options);
	this._name = options.name;
	this._validate = options.validate;
	this._serialize = options.serialize;
	this._supertype = options.supertype;
}

Hyponym.prototype.name = function() {
	return this._name || this._supertype.name();
}

Hyponym.prototype.subtype = function(options) {
	options.supertype = this;
	return new Hyponym(options);
}

Hyponym.prototype.supertype = function() {
	return this._supertype || null;
}

Hyponym.prototype.validate = function(val) {
	return (this._supertype
		? this._supertype.validate(val)
		: true) && this._validate(val);
}

Hyponym.prototype.assert = function(val, returns) {
	if(this.validate(val)) return;
	var error = new Error(val+' does not validate for '+this.name());
	if(returns) return error;
	throw error;
}

Hyponym.prototype.serialize = function(val) {
	if(this._serialize) val = this._serialize(val);
	return this._supertype ? this._supertype.serialize(val) : val;
}

Hyponym.baseType = function _baseType(type) {
	var supertype = type.supertype();
	if(!supertype) return type;
	return _baseType(supertype);
}

var baseTypes = [
	"Number", "String", "Boolean", "Object",
	"Date", "Array", "RegExp", "Function", "Error"
];

baseTypes.forEach(function(name) {
	Hyponym[name] = Hyponym({
		name: name,
		validate: function(val) {
			return Object.prototype.toString.call(val) === '[object '+name+']';
		},
		serialize: function(val) {
			return val;
		}
	});
});

module.exports = Hyponym;
