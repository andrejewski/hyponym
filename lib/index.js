
function Hyponym(options) {
	if(!(this instanceof Hyponym)) return new Hyponym(options);
	this._name = options.name;
	this._validate = options.validate;
	this._serialize = options.serialize;
}

Hyponym.prototype.name = function() {
	return this._name || this.supertype.name();
}

Hyponym.prototype.subtype = function(options) {
	options.supertype = this;
	return new Hyponym(options);
}

Hyponym.prototype.validate = function(val) {
	return (this.supertype
		? this.supertype.validate(val)
		: true) && this._validate(val);
}

Hyponym.prototype.serialize = function(val) {
	if(this._serialize) val = this._serialize(val);
	return this.supertype ? this.supertype.serialize(val) : val;
}

(["Number", "String", "Boolean", "Object", "Date", "Array"]).forEach(function(name) {
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
