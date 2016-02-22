describe("A simple program that does aritmetic", function() {
  it("can add two numbers", function() {
  	operator = "add";
    expect(calculate(3,5)).toBe(8);
  });
});

