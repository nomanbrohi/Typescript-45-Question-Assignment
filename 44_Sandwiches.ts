
function make_sandwich(...items:string[]){

    console.log("Make a sandwich with ")
    for(let item = 0; item < items.length; item++){
        console.log((item+1) + " - " +items[item])
    }
    console.log(`you orderd ${items} for your sandwich`)
}

make_sandwich("Caps", "chicken", "Sauce")
make_sandwich("Cheese", "chicken", "Cucumber")
make_sandwich("Tomato", "Beef", "Onion")