let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let even = [];
// for (let i = 0 ; i < numbers.length; i++){
//     if(numbers[i]% 2 == 0);
//    let result = even.push(numbers[i]);
// }
// console.log(result);
let evenNumbers = numbers.filter(function(element){
    return element % 2 == 0 ;
});
console.log(evenNumbers)




