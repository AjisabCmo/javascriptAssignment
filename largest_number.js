

const prompt = require("prompt-sync")();

let largest = 0;



        for (let count = 0 ; count < 10 ; count++){
            let number = parseFloat(prompt("enter number: "));
        if (number > largest){
            largest = number;

        
    }
  
}
console.log("the largest is :",largest);