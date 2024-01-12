let person1 = "Ashish";
let person2 = "Surya";
let person3 = "Saum";

// we all have to tell other files that u can use this variable
//  so first export the variables using module.exports

// module.exports = person1;  for single variable

// as we have multiple variables we will use this to export

module.exports = {person1,person2,person3}


// we use exports function we export/send data 
