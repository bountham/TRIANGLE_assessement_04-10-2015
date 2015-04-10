
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
  return "scalene";
  }

  if ((sort[0] === sort[1]) && (sort[0] != sort[2])) {
  return "isosceles";
  }

  if ((sort[0] === sort[1]) && (sort[0] === sort[2]) && (sort[1] === sort[2])) {
  return "equilateral";
  }

  if (squaRes[0] + squaRes[1] === squaRes[2]) {
  return "correct";
  }

  } else {
  return "not-correct";
  }

};
  $(document).ready(function() {
  $('form#triangle').submit(function(event) {

    var a = $('input#numberA').val();
    var b = $('input#numberB').val();
    var c = $('input#numberC').val();
    var input_result = triangle(a, b, c);

    $('#type').empt().text(input_result);
    $('#result').show()
    event.preventDefault();
  });
});
