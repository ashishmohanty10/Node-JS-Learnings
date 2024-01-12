// this will allow us to use that function from
// that (index.js) file and we can use it right here

// we use require function to get the data
const greet = require("./greet");
const { person1, person2, person3 } = require("./people");

greet("ashish");
console.log(person1);
console.log(person2);
console.log(person3);

greet(person1);
greet(person2);
greet(person3);
