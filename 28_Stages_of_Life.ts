let PersonAge: number = 65;

if (PersonAge < 2){
    console.log("Person is a Baby")
}
else if (PersonAge >= 2 && PersonAge < 4){
    console.log("Person is a Toddler")
}
else if (PersonAge >= 4 && PersonAge < 13){
    console.log("Person is a Kid")
}
else if (PersonAge >= 13 && PersonAge < 20){
    console.log("Person is a Teenager")
}
else if (PersonAge >= 20 && PersonAge < 65){
    console.log("Person is a Adult")
}
else{
    console.log("Person is a elder")
}
