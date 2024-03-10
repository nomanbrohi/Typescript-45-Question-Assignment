// Q12 :Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var names:string[] = ["Aamir", "wajid", "khalid"]

for (let name = 0; name < names.length; name++){
    console.log((name+1) + ": "+"Hello Mr. " + names[name] + " Good Morning!")
};