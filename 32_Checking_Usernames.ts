// let current_users: string[] = ['aamir', 'khalid','wajid','haseeb','saeed'];
// let new_users: string[] = ['aamir','khalid','tauqeer','abdul','shoaib'];

// for(let username of new_users){
//     if( current_users.includes(username)){
//         console.log("The username " + username + " need to enter new username!")
//     }
//     else{
//         console.log("The Username " + username + " is available")
//     }
// }


let current_users: string[] = ['aamir', 'khalid','wajid','haseeb','saeed'];
let new_users: string[] = ['aamir','khalid','tauqeer','abdul','shoaib'];


for(let username of new_users){
    username = prompt('Enter Username: ')?.toLowerCase() || '';
    if( current_users.includes(username)){
        alert("The username " + username + " need to enter new username!")
    }
    else{
        alert("The Username " + username + " is available")
    };
};