  var math = require('../math');

  describe("A simple program that does aritmetic", function() {
  	it("can add two numbers", function() {
  		operator = "add";
  		expect(math.calculate(3,5)).toBe(8);
  	});

  	it("can subtract two numbers", function() {
  		operator = "subtract";
  		expect(math.calculate(3,5)).toBe(-2);
  	});

  	it("can multilply two numbers", function() {
  		operator = "multiply";
  		expect(math.calculate(3,5)).toBe(15);
  	});

  	it("can divide numbers", function() {
  		operator = "divide";
  		expect(math.calculate(6,2)).toBe(3);
  	});
  });
