
var Hyponym = require("./");

module.exports = function Range(type, min, max, exclusive) {
	if(exclusive === void 0) {
		exclusive = false;
	}
	if(max === void 0) {
		max = min;
		min = 0;
	}
	return type.subtype({
		name: 'Range('+type.name()+')',
		validate: typeValidator(type)
	});
}

function typeValidator(type) {
	var name = Hyponym.baseType(type).name();
	switch(name) {
		case 'Number': 
			return rangeNumber(type, min, max, exclusive);
		case 'String':
			return rangeString(type, min, max, exclusive);
		case 'Array':
			return rangeArray(type, min, max, exclusive);
		case 'Date':
			return rangeDate(type, min, max, exclusive);
		default: throw new Error("Range does not support "+name);
	}
}

function rangeNumber(type, min, max, exclusive) {
	return function(val) {
		if(exclusive) return min < val && val < max;
		return min <= val && val <= max; 			
	}
}

function rangeString(type, min, max, exclusive) {
	return function(str) {
		var val = str.length;
		if(exclusive) return min < val && val < max;
		return min <= val && val <= max; 			
	}
}

function rangeArray(type, min, max, exclusive) {
	return function(str) {
		var val = str.length;
		if(exclusive) return min < val && val < max;
		return min <= val && val <= max; 			
	}
}

function rangeDate(type, min, max, exclusive) {
	min = min.valueOf();
	max = max.valueOf();
	return function(date) {
		var val = date.valueOf();
		if(exclusive) return min < val && val < max;
		return min <= val && val <= max; 			
	}
}




