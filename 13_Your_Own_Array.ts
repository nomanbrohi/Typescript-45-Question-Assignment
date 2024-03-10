// Q13 :Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var transport: string[] = ["Motorbike", "Car", "Bicycle"]

for (let trans = 0; trans < transport.length; trans++){
    console.log("I want to ride a " + transport[trans] + " for long drive")
};