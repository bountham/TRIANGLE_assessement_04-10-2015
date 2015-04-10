describe('triangle', function() {

it("user input : (3, 5, 5)", function() {
expect(triangle(3, 5, 4)).to.equal("RIGHT");
});

it("user input not a triangle : (4, 5, 10)", function() {
expect(triangle(4, 5, 10)).to.equal("this not a triangle");
});

it("user input a scalene triangle : (2, 6, 7)", function() {
expect(triangle(2, 6, 7)).to.equal(" SCALENE");
});

it("user input a isosceles triangle : (4, 4, 6)", function() {
expect(triangle(4, 4, 6)).to.equal("ISOSCELES");
});

it("user input a equilateral triangle for inputs: (5, 5, 5)", function() {
expect(triangle(5, 5, 5)).to.equal("EQUILATERAL");
});

it("if user input negative values :(4, 4, -4)", function() {
expect(triangle(4, 4, -4)).to.equal("EQUILATERAL");
});

});
