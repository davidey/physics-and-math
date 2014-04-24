function DegreeValue(value) {
	this.set(value);
}

DegreeValue.fromRadians = function fromRadians(value) {
	var degrees = value * 180 / Math.PI;

	return new DegreeValue(degrees);
}

DegreeValue.prototype._normalize = function _normalize(value) {
	return (value + 360) % 360;
}

DegreeValue.prototype._fixRounding = function _fixRounding(value) {
	// Takes care of the Javascript rounding issues
	var result = parseFloat(value.toFixed(10));

	return result;
}

DegreeValue.prototype.set = function set(value) {
	this.value = this._normalize(value);
	return this;
}

DegreeValue.prototype.toRadians = function toRadians() {
	var result = this.value * (Math.PI / 180);

	return result;
}

DegreeValue.prototype.sin = function sin() {
	var value = Math.sin(this.toRadians());
	var result = this._fixRounding(value);

	return result;
}

DegreeValue.prototype.cos = function cos() {
	var value = Math.cos(this.toRadians());
	var result = this._fixRounding(value);

	return result;
}

DegreeValue.prototype.add = function add(value) {
	this.set(this.value + value);
	return this;
}

DegreeValue.prototype.clone = function clone() {
	return new DegreeValue(this.value);
}