//Store a guest name in a array
var guest_list = ["Aamir", "Wajid", "Khalid"];

//print invitation message for each person in the list
for (let guest = 0; guest < guest_list.length; guest++){
    console.log("Mr. " + guest_list[guest] + ", i would like to invite you for a dinner. Please come at 9pm. Thank you");
};

//print apology message 
console.log("\nSoryy Mr." + guest_list[1] + ", would not be able to attend the dinner party.\n" 
);

//update list with new member
guest_list[1] = "khursheed"

//print invitation message with updated list
for(let new_guestlist=0; new_guestlist < guest_list.length; new_guestlist++){
    console.log("Mr. " + guest_list[new_guestlist] + ", i would like to invite you for a dinner. Please come at 9pm. Thank you.");
};

//print message about dinner table 
console.log("\nGuys I want to inform you that I got a big dinner table for a dinner party so I am inviting a few more friends on the list.\n")

//update list with three more friend
guest_list.unshift("saeed");
guest_list.splice(1,0,"haseeb");
guest_list.push("umair");

//print message with 3 more people added in list.
for(let new_guestlist = 0; new_guestlist < guest_list.length; new_guestlist++){
    console.log("Mr. " + guest_list[new_guestlist] + ", i would like to invite you for a dinner. Please come at 9pm. Thank you.");
}

//print a message to apology that bigger table didn't arranged
console.log("\nI'm sorry friends I couldn't arrange a bigger table for dinner, so I can only invite two peoples.\n");

// Remove guests until only two names remain
while(guest_list.length > 2){
    let removeGuestList = guest_list.pop();
    console.log("I'm sorry " + removeGuestList +" , I can't invite you for a dinner.");
};

//Print invitations to the two remaining guests
console.log("\nInvitation to the two remaining guests:\n");
for (let remainingGuest of guest_list){
    console.log("Mr. " + remainingGuest + " you are invited for dinner")   
};

// Remove the last two names from the list
guest_list.splice(0,2)

//Empty Guest list
console.log(guest_list)