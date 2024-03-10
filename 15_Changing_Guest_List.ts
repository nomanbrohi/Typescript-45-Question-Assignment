
let guest_list : string[] = ["Aamir", "Wajid", "Khalid"]

//print original Guest list
for (let guest = 0; guest < guest_list.length; guest++){
    console.log("Mr. " + guest_list[guest] + ", i would like to invite you for a dinner. Please come at 9pm.thank you  ")
};

//Print apology message.
console.log("\nSorry Mr. " + guest_list[1] + ", would not be able to attend the dinner party.\n" 
);

//update guest list
guest_list[1] = "khursheed"

//Greeting new invitation.
console.log("New Invitation:");

//print message with new invitation and updated list.
for(let new_guestlist=0; new_guestlist < guest_list.length; new_guestlist++){
    console.log("Hello Mr. " + guest_list[new_guestlist] + ", i would like to invite you for a dinner. Please come at 9pm. thank you  ")
};
