
let megicians:string[] = ["John","Michael","Albert"];

function show_megicians(megicians:string[]){
    for(let name of megicians){
        console.log(name)
    };
};

function make_great(...megicians:string[]){
    let result:string[]=[]   
    for(let i = 0; i < megicians.length; i++){
      result.push(megicians[i] = "The Great " + megicians[i])
    };
    return result
};

let newMagicians = make_great(...megicians);

// make_great(megicians);
show_megicians(megicians);
show_megicians(newMagicians);



