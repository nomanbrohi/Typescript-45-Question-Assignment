
let city_name: string= "Karachi"

//Tests for equality and inequality with strings
console.log("Equality with String", city_name == "Karachi");
console.log("Inequality with String", city_name == "Lahore");

//Tests using the lower case function
console.log("\nUsing the Lower Case Function", city_name.toLowerCase() == "karachi")
console.log("Using the Lower Case Function", city_name.toLowerCase() != "karachi")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 1993
console.log("\nNumber Equality Test num == 1993", num == 1993);
console.log("Number Inequality Test num == 1994", num == 1994);
console.log("Number Less Than Test num > 1994", num < 1994);
console.log("Number Greater Than Test num < 1994", num > 1994);
console.log("Number Less Than and equal to Test num <= 1993", num <= 1993);
console.log("Number Greater Than and equal to Test num >= 1994", num >= 1994);


// Tests using "and" and "or" operators
console.log(city_name == "Karachi" && city_name != "karachi");
console.log(city_name == "Karachi" && city_name != "Karachi");

console.log(city_name == "Karachi" || city_name != "Karachi");
console.log(city_name == "karachi" || city_name != "Karachi");

// // Test whether an item is in a array
let array = ["apple", "Orange", "Banana"];
// Test whether an item is in a array
console.log("\napple is in the array", array.includes("apple"))
// Test whether an item is not in a array
console.log("Strawberry is not the array", array.includes("Strawberry"))