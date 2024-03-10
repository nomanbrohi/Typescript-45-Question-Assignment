let ordinal_numbers: number[] =[1,2,3,4,5,6,7,8,9];

for(let number of ordinal_numbers){
    if (number == 1)
    console.log(1 + "st");
    else if (number == 2){
        console.log(2 + "nd");
    }
    else if (number == 3){
        console.log(3 + "rd");
    }
    else{
        console.log(number + "th")
    }

};