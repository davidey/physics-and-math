/**
 * A 2D vector class
 * 
 * @param {number} x The x magnitude
 * @param {number} y The y magnitude
 */
function Vector(x, y) {
	this.x = x;
	this.y = y;
}

/**
 * Static method
 * Creates a vector instance starting from the degrees of
 * its orientation and the magnitude
 * @param  {DegreeValue} degrees   The degree value object
 * @param  {float} magnitude Magnitude for the vector
 * @return {Vector}           The resulting vector
 */
Vector.fromDegrees = function fromDegrees(degrees, magnitude) {
	var x = degrees.cos();
	var y = degrees.sin();

	var vector = new Vector(x, y);
	vector.multiply(magnitude);

	return vector;
}

/**
 * Add the given vector to the current one
 * @param {Vector} v The vector to add
 */
Vector.prototype.add = function add(v) {
	this.x += v.x;
	this.y += v.y;
};

/**
 * Subtract the given vector to the current one
 * @param {Vector} v The vector to subtract
 */
Vector.prototype.subtract = function subtract(v) {
	this.x -= v.x;
	this.y -= v.y;
};

/**
 * Multiply the current vector by the given scalar value
 * @param  {number} s The scalar value
 */
Vector.prototype.multiply = function multiply(s) {
	this.x *= s;
	this.y *= s;
}

/**
 * Returns the magnitude of the current vector
 * @return {number} The vector's magnitude
 */
Vector.prototype.getMagnitude = function getMagnitude() {
	var result = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

	return result;
}

Vector.prototype.toUnitVector = function toUnitVector() {
	var magnitude = this.getMagnitude();

	var result = new Vector(this.x / magnitude, this.y / magnitude);

	return result;
}

Vector.prototype.clone = function clone() {
	return new Vector(this.x, this.y);
}