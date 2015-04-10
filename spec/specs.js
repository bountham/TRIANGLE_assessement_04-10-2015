describe('triangle', function() {

it("user input : (3, 5, 5)", function() {
expect(triangle(3, 5, 4)).to.equal("correct");
});

it("user input not a triangle for inputs: (4, 5, 10)", function() {
expect(triangle(4, 5, 10)).to.equal("impossible");
});

it("user input a scalene triangle for inputs: (4, 5, 7)", function() {
expect(triangle(4, 5, 7)).to.equal("scalene");
});

it("user input a isosceles triangle for inputs: (4, 4, 5)", function() {
expect(triangle(4, 4, 5)).to.equal("isosceles");
});

it("user input a equilateral triangle for inputs: (3, 3, 3)", function() {
expect(triangle(3, 3, 3)).to.equal("equilateral");
});

it("if user input negative values", function() {
expect(triangle(4, 4, -4)).to.equal("equilateral");
});
it("user input a correct triangle (3, 5, 4)", function() {
expect(triangle(3, 5, 4)).to.equal("correct");
});
});
