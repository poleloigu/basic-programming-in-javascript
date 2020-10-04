/**
 *  Adding javascript to your index.html
 */

/* <script>

</script> */

/* <script src="./filename.js"></script> */

/**
 * Setting variables;
 */
var x; // If you were to console log this out it would give undefined.
var x = 1;
x = 2;

/**
 * Different types of variables
 */
var number = 1;
var string = 'This is a string';
string.indexOf('o');
string.length;
string.substr(0, 2); // 0 = starting point   2 = how many letters to take

var bool = true; // or false
var int = 10;
var float = 10.55;
var nothing = null;
var notaNumber = NaN;

/**
 * Array
 */
// Array is always ordered. Starts from index 0, so getting number 1 would be array[0] and getting 'Hello' would be array[2]
var array = [1, 2, 'Hello'];
// Array methods
array[1] = 0; // [0, 2, 'Hello']
array.push('Hi again'); // [0, 2, 'Hello', 'Hi again']
array.pop(); // [0, 2, 'Hello']
var x = array[2]; // console.log(x) would give us 'Hello'
array.length; // Will give us length of array in this case 3 (Very useful in for loops over arrays)

/**
 * Object
 */
// called key: value pairs;
var obj = {
  name: 'Hello',
  age: 1,
  saySomething: function () {
    console.log('saying something');
  },
};

var name = obj.name; // 'Hello'
obj.age = 15; // console.log(obj.name) 15
obj.newKey = 10; // console.log(obj.newKey) 10
obj.saySomething(); // 'saying something'

/**
 * Logging and displaying data functions
 */
var logging = false; // Change this to true if you want to see logging in action
var alerting = false; // Change this to true if you want to see alerting in action

// These are extracurricular
// var person = prompt("Please enter your name", "Harry Potter");
// window.print('Hello');

if (logging == true) {
  var logThisValue = 'Type this into console';
  console.log('This');
  console.log(1);
  console.log(logThisValue);
}

if (alerting == true) {
  var alertThisValue = 'Type this into console';
  alert('This');
  alert(1);
  alert(alertThisValue);
}

/**
 * Incrementation and decrementation
 */

var a;
a++; // incremenent
a--; // decrement

/**
 * Functions
 */

function randomFunction() {
  // Anything inside these {} will be tied to that function
}

function function1(parameter1, parameter2) {
  var result = parameter1 + parameter2; // Operations inside the function
  return result; // Return is used when you need to give back a variable;
} // This function will take two given parameters, add them together and then return the result of the sum.

function function2(parameter1, parameter2) {
  var result = parameter1 + parameter2; // Operations inside the function
  //   alert(result);

  // This function does not have a return because we only use it to alert the given sum that we get.
}

// When needing to just display some data, e.g console.log or alert then it is fine to use a function without return (example 1)
// However when a value is needed to be given from the function then it must have a return

// This will alert 3
function2(1, 2);

// This will not alert but return the value
var sum = function1(1, 2);

/**
 * Loops
 */

var number_here = 10;

for (var i = 0; i <= number_here; i++) {
  // Operations
  // number here should be bigger than i but dont forget i++
  // if i reaches number_here then loop will break
}

var i = 0;
var number_there = 10;
while (i < number_there) {
  console.log('1');
  i++;
  // operations
  // number there should be bigger than i but dont forget i++
  // if i reaches number_there then loop will break
}

var arr = [1, 2, 3, 4, 5];
for (var i of arr) {
  console.log(i); // Gives element
}
for (var i in arr) {
  console.log(i); // Gives index
}

/**
 * Conditionals
 */

// Here are ways to compare things
// value1 > value2
// value1 >= value2
// value1 < value2
// value1 <= value2
// value1 == value2
// value1 === value2     THIS ONE ALSO COMPARES TYPES

var value1 = 1;
var value2 = 2;
var value3 = 3;
if (value1 > value2) {
  // operations if true
}

if (value1 > value2) {
  // operations if true
} else {
  // operations if false
}

if (value1 > value2) {
  // operations if the line above is true
} else if (value2 > value3) {
  // operations is the line above is true
} else {
  // operations if false
}

/**
 * Switch
 */

myAge = 0;
switch (myAge) {
  case 15:
    alert('youre 15');
    break;
  case 20:
    alert('youre 20');
    break;
  default:
    // alert('Did not get your age');
    break;
}
