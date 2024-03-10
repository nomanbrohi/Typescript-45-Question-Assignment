let megicians:string[] = ["John","Michael","Albert"];

function show_megicians(megicians:string[]){
    for(let name of megicians){
        console.log(name)
    };
};

function make_great(megicians:string[]){
    for(let i = 0; i < megicians.length; i++){
        megicians[i] = "The Great " + megicians[i]
    };
};

make_great(megicians);
show_megicians(megicians);
