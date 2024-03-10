function make_album(Artist:string, Title:string, Track?:number): {Artist:string, Title:string, Track?:number}{
    // First put the object properties and types in variable & asigning their values
    let album :{Artist:string, Title:string, Track?:number}={Artist:Artist, Title:Title};
    
    // check if the track property have value
    if(Track){
        album.Track =(Track)
    };
    // Return the album 
    return album;

};

// 
let album1=make_album("Atif Aslam", "Adat");
let album2=make_album("Ali Zafar", "Junoon", 4);
let album3=make_album("Eminem", "Not Afraid", 9);
console.log(album1);
console.log(album2);
console.log(album3);
