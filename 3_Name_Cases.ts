// Q3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let PersonName: string = 'Noman Shahnawaz'


console.log('Name in LowerCase: ' + PersonName.toLowerCase());
console.log('Name in LowerCase: ' + PersonName.toUpperCase());
let titleCaseName = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log("Titlecase: " + titleCaseName);
