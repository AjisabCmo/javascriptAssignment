const prompt = require ("prompt-sync")();
let mile =prompt("enter number of mile driven: ");
let gallon = prompt ("enter number of gallon driven: ");
while(mile != 1){
    let mile =prompt("enter number of mile driven: ");
    let gallon = prompt ("enter number of gallon driven: ");
let total = mile / gallon ;
console.log(total)
}