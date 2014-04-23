function WaveColor(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	
	this.updateHsl();
}

WaveColor.prototype.updateHsl = function updateHsl() {
	var hsl = rgbToHsl(this.r, this.g, this.b);
	this.h = hsl[0];
	this.s = hsl[1];
	this.l = hsl[2];
};

WaveColor.prototype.updateRgb = function updateRgb() {
	var rgb = hslToRgb(this.h, this.s, this.l);
	this.r = Math.round(rgb[0]);
	this.g = Math.round(rgb[1]);
	this.b = Math.round(rgb[2]);
};

WaveColor.prototype.subtract = function subtract(color) {
	return new WaveColor(	this.r - color.r,
							this.g - color.g,
							this.b - color.b);
};

WaveColor.prototype.applyChangeTo = function applyChangeTo(property, percentage) {
	if (percentage === 100) {
		return this;
	}
	var prevColor = this.toHexString();
	var ratio = percentage / 100;
	this[property] = Math.min(1, this[property] * ratio);


	this.updateRgb();

	return this;	
};

WaveColor.prototype.applySaturation = function applySaturation(percentage) {
	return this.applyChangeTo('s', percentage);
};

WaveColor.prototype.applyBrightness = function applySaturation(percentage) {
	return this.applyChangeTo('l', percentage);
};

WaveColor.prototype.toHex = function toHex() {
	return Number(255 * 0x1000000 + Math.round(this.r*0x10000) + Math.round(this.g)*0x100 + Math.round(this.b));
};

WaveColor.prototype.toHexString = function toHexString() {
	return this.toHex().toString(16);
};

WaveColor.prototype.clone = function clone() {
	return new WaveColor(this.r, this.g, this.b);
};