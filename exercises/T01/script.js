//Using loops (`for` or `while`), write a function, printing numbers from a to b, divisible by c.
function numbersInLoops(a, b, c) {
  for (var i = a; i <= b; i++) {
    console.log(i);
    if (i % c === 0) {
      console.log('This number ' + i + ' is divisible by ' + c);
    }
  }
}
//calling:
// numbersInLoops(10, 20, 3);

//Write a function with will output a multiplication table with size of a given argument.
function multiplicationTable(n) {
  var line = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      line += j * i + ' ';
    }
    console.log(line);
    line = '';
  }
}

//calling:
multiplicationTable(5);

//Write a function, outputting a christmas tree of a given height, made of asterisk `*` character.
function christmasTree(n) {
  var tree = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      tree += '*';
    }
    console.log(tree);
    tree = '';
  }
}
//calling:
christmasTree(4);

//Christmas Tree By Night
function christmasTreeByNight(n) {
  //TODO write your code
}

// Write a function which will accept 3 numbers and check, whether they form a pythagorean triple.
// Modify the function so that it works, regardless the order of the arguments.
function pythagoreanTriple(a, b, c) {
  if (c * c == a * a + b * b) {
    console.log('True');
  } else if (b * b == a * a + c * c) {
    console.log('True');
  } else if (a * a == b * b + c * c) {
    console.log('True');
  } else {
    console.log('False');
  }
}
pythagoreanTriple(4, 4, 5);
//calling:
//pythagoreanTriple(3,4,5);

//Write a function which will count surface area of a given shape (triangle, rectangle, trapezoid), using `switch`.
function surfaceArea(shape, a, b, c) {
  //TODO write your code
}
//calling:
//surfaceArea("triangle",2,5)
