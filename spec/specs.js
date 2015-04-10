describe('triangle', function() {

it("user input : (3, 5, 5)", function() {
expect(triangle(3, 5, 4)).to.equal("correct");
});

it("user input not a triangle : (4, 5, 10)", function() {
expect(triangle(4, 5, 10)).to.equal("not-correct");
});

it("user input a scalene triangle : (2, 6, 7)", function() {
expect(triangle(2, 6, 7)).to.equal("scalene");
});

it("user input a isosceles triangle : (2, 2, 3)", function() {
expect(triangle(2, 2, 3)).to.equal("isosceles");
});

it("user input a equilateral triangle for inputs: (5, 5, 5)", function() {
expect(triangle(5, 5, 5)).to.equal("equilateral");
});

it("if user input negative values :(4, 4, -4)", function() {
expect(triangle(4, 4, -4)).to.equal("equilateral");
});

});
