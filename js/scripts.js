
var triangle = function(a, b, c) {

    var length_number = [Math.abs(a), Math.abs(b), Math.abs(c)],
    sort = [],
    squaRes = [],
    i;

  sort = length_number.sort(function(a, b) { return a-b});

  for (i = 0; i < sort.length; i++) {
  squaRes[i] = Math.pow(sort[i], 2);
  }

  if (sort[0] + sort[1] > sort[2]) {

  if ((sort[0] != sort[1]) && (sort[0] != sort[2]) && (sort[1] != sort[2])
  && (squaRes[0] + squaRes[1] != squaRes[2])) {
  return "SCALENE";
  }

  if ((sort[0] === sort[1]) && (sort[0] === sort[2]) && (sort[1] === sort[2])) {
  return "EQUILATERAL";
  }


  if ((sort[0] === sort[1]) && (sort[0] != sort[2])) {
  return "ISOSCELES";
  }


  if (squaRes[0] + squaRes[1] === squaRes[2]) {
  return "RIGHT";
  }

  } else {
  return "this not a triangle";
  }

};
  $(document).ready(function() {
  $('form#triangle').submit(function(event) {

    var a = $('input#numberA').val();
    var b = $('input#numberB').val();
    var c = $('input#numberC').val();
    var input_result = triangle(a, b, c);

    $('#display').text(input_result);
    $('#result').show()
    event.preventDefault();
  });
});
