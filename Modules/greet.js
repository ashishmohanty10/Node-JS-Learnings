function greet(username) {
  console.log("hello", username);
}

// tell other files that u can use this function

module.exports = greet;
// this allows us to tell other files that u can use this function