var people = [
  {
    first_name: 'Clifford',
    last_name: 'Hasloch',
    gender: 'Male',
    age: 28,
    isWearingMask: false,
  },
  {
    first_name: 'Geralda',
    last_name: 'Soldan',
    gender: 'Female',
    age: 19,
    isWearingMask: false,
  },
  {
    first_name: 'Ianthe',
    last_name: 'Collidge',
    gender: 'Female',
    age: 24,
    isWearingMask: false,
  },
  {
    first_name: 'Radcliffe',
    last_name: 'Revill',
    gender: 'Male',
    age: 21,
    isWearingMask: true,
  },
  {
    first_name: 'Chane',
    last_name: 'Hearle',
    gender: 'Male',
    age: 15,
    isWearingMask: true,
  },
  {
    first_name: 'Yuma',
    last_name: 'Borsi',
    gender: 'Male',
    age: 20,
    isWearingMask: false,
  },
  {
    first_name: 'Pinchas',
    last_name: 'Duddin',
    gender: 'Male',
    age: 19,
    isWearingMask: true,
  },
  {
    first_name: 'Constantia',
    last_name: 'Enderle',
    gender: 'Female',
    age: 22,
    isWearingMask: true,
  },
  {
    first_name: 'Kerwinn',
    last_name: 'Gorhardt',
    gender: 'Male',
    age: 18,
    isWearingMask: true,
  },
  {
    first_name: 'Ludovico',
    last_name: 'Orenzel',
    gender: 'Male',
    age: 31,
    isWearingMask: true,
  },
];
console.log(people);

for (var i = 0; i < people.length; i++) {
  // console.log(people[i]);
}

var i = 0;
while (i < people.length) {
  // We want to get every second person
  // console.log(people[i]);
  // if (i % 2 === 0) {  // This IF is used for printing out every second person
  // console.log(people[i]);
  // }
  i++;
}

var adults = [];
for (var person of people) {
  if (person.age >= 21) {
    adults.push(person.first_name + ' ' + person.last_name + ' ' + person.age);
  }
}
// console.log(adults)

var female = [];
var male = [];
for (var person of people) {
  if (person.gender === 'Male') {
    male.push(
      person.first_name + ' ' + person.last_name + ' is ' + person.gender
    );
  } else {
    female.push(person.first_name + ' ' + person.last_name + ' is Female');
  }
}
// console.log(male);
// console.log(female);

var gotIn = [];
var didNot = [];
// person === people[i]
for (person of people) {
  var random = Math.random();
  if (random >= 0.5) {
    gotIn.push(person);
  } else {
    didNot.push(person);
  }
}
// console.log(gotIn);
// console.log('Got in');
// console.log(didNot);
// console.log('Did not get in');

// Check if persons firstname is one of these C, G, F, L, X or W     (use switch and substring)
// if it is then alert/console and give the letter for which they were not admitted.

/**
 * This is an array of objects of people who would like to go to an event.
 * Make an array of people attending an event, both first name and last name
 * and print their last and first name into console.
 *
 * Extra:
 * #1 The event they would like to go to is an 21+ event.
 * So everyone aged less than 21 cannot get inside.
 * Make a new array where you put the first name and last name who could get into the party.
 *
 *
 * #3 For current safety reasons we must randomly give every person a 50% chance of getting in.
 *
 * #4 If a persons first name starts with C, G, F, L, X or W they sadly cannot come in to the event.
 * Write the alert/console message for which letter they cannot be admitted for.
 *
 *
 *  */
