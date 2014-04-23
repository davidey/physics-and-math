function DegreeValue(value) {
	this.set(value);
}

DegreeValue.prototype._normalize = function _normalize(value) {
	return (value + 360) % 360;
}

DegreeValue.prototype.set = function set(value) {
	this.value = this._normalize(value);
	return this;
}

DegreeValue.prototype.toRadians = function toRadians() {
	return this.value * (Math.PI / 180);
}

DegreeValue.prototype.sin = function sin() {
	return Math.sin(this.toRadians());
}

DegreeValue.prototype.cos = function cos() {
	return Math.cos(this.toRadians());
}

DegreeValue.prototype.add = function add(value) {
	this.set(this.value + value);
	return this;
}

DegreeValue.prototype.clone = function clone() {
	return new DegreeValue(this.value);
}