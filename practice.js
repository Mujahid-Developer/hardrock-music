// function greet(firstName, secondName) {
//   console.log("Hello " + firstName + " " + secondName);
// }
// greet("Moshiur", "Rahman");
// greet("Nayem", "Nengta");

// function square(numbers, addition) {
//   return numbers * numbers + addition;
// }
// console.log(square(2, 3));

const user = { id: 23, name: "Saimun", age: 16 };
console.log(user);
const userJson = JSON.stringify(user);
console.log(userJson);
const userObject = JSON.parse(userJson);
console.log(userObject);
