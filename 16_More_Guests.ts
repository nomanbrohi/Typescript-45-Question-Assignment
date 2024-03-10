//make a variable for guest
let guest_list: string[] = ["Aamir", "Wajid", "Khalid"];

//print a message for each guest
for (let guest = 0; guest < guest_list.length; guest++){
    console.log("Mr. " + guest_list[guest] + ", i would like to invite you for a dinner. Please come at 9pm. Thank you  ")
};

//print a apology message
console.log("\nSoryy Mr." + guest_list[1] + ", would not be able to attend the dinner party.\n" 
);

//update the list with new guest member
guest_list[1] = "khursheed"

//print new invitation
console.log("New Invitation:");

//print message with updated guest list
for(let new_guestlist=0; new_guestlist < guest_list.length; new_guestlist++){
    console.log("Mr. " + guest_list[new_guestlist] + ", i would like to invite you for a dinner. Please come at 9pm. Thank you.")
};

//print your message that you found a bigger table
console.log("\nGuys I want to inform you that I got a big dinner table for a dinner party so I am inviting a few more friends on the list.\n");

//update list with 3 more people
guest_list.unshift("saeed");
guest_list.splice(1,0,"haseeb");
guest_list.push("umair");

//print message with updated list
for(let new_guestlist=0; new_guestlist < guest_list.length; new_guestlist++){
    console.log("Mr. " + guest_list[new_guestlist] + ", i would like to invite you for a dinner. Please come at 9pm. Thank you")};
