describe('Vector', function () {
	var vector = null;

	beforeEach(function () {
		vector = new Vector(1, 2);
	});

	describe('new Vector()', function () {
		it('should save the given x and y into the internal properties', function () {
			expect(vector.x).toEqual(1);
			expect(vector.y).toEqual(2);
		});
	});

	describe('add()', function () {
		it('should add the given vector\'s x and y to the own ones', function () {
			var otherVector = new Vector(1, 1);
			vector.add(otherVector);

			expect(vector.x).toEqual(2);
			expect(vector.y).toEqual(3);
		});
	});

	describe('multiply()', function () {
		it('should multiply the vector by the given scalar value', function () {
			vector.multiply(2);

			expect(vector.x).toEqual(2);
			expect(vector.y).toEqual(4);
		});
	});

	describe('getMagnitude()', function () {
		it('should return the vector\'s magnitude', function () {
			vector = new Vector(3, 4);
			var result = vector.getMagnitude();

			expect(result).toEqual(5);
		});
	});

	describe('toUnitVector()', function () {
		it('should return a unit vector based on the current vector', function () {
			vector = new Vector(3, 4);
			var result = vector.toUnitVector();

			expect(result.x).toEqual(3/5);
			expect(result.y).toEqual(4/5);
			expect(result.getMagnitude()).toEqual(1);
		});
	});
});