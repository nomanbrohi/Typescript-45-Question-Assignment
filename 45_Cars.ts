function carInfo(manufacturer:string, model:string, ...additional:[string, any][]){
    let car:any = { manufacturer:manufacturer, model:model};


    additional.forEach(([key, value]) => {
        car[key]=value;
    });

    return car

};

let mycar = carInfo("toyota", "corolla", ["color", "Black"], ["Features", "Auto"])
console.log(mycar)