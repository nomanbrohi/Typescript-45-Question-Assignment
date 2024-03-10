
let countries: string[] = ["New Zealand", "Malaysia", "Irland", "Canada", "Yoganda"];

// Print Array in original Order
console.log("Origanal Order:");
console.log(countries);

// Print alphabetical order (without modifying original list)
console.log("\nAlphabetical order:");
console.log([...countries].sort());

// Print Orginal Order unchanged
console.log("\nOriginal order unchanged:");
console.log(countries);

// Print Reverse alphabetical order (without modifying original list)
console.log("\nReverse Alphabetical order:");
console.log([...countries].sort().reverse());

// Print array is still in it's Original order.
console.log("\nOriginal order unchanged:");
console.log(countries);

// Reverse the order of the list
console.log("\nReversed Order List:");
console.log(countries.reverse());

// Reverse the order again in it's original order
console.log("\nBack to Original Order:");
console.log(countries.reverse());

// sort list to change their order in alphabetical order
console.log("\nAlphabetical ordered list:");
console.log(countries.sort());

// Reversed list again in reversed alphabetical order list
console.log("\nReversed alphabetical order list:");
console.log(countries.reverse());