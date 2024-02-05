// const number =[1,2,3,4,5];
// newArray = [];

// number.forEach((nums)=> {
//     if(nums % 2 === 0){
// console.log(nums)
//     }

// });

// number.forEach((x) =>{
//     let ans = x * 3;
//     newArray.push(ans)
//     console.log(newArray)

// });


// const word = ['price','heat','monologue'];
// const result = word.filter((word) => word.length)

// console.log(result)
// const array1 = [1,4,9,10];
// const map1 = array1.map((x) => x * 2);
// console.log(map1)

// let array = [2,3,4,5,6,7];
// const squareofnumber = array.map((num) => num * num);
// console.log(squareofnumber);

// let array = [2,3,5,6,7,2,2];
// let result = array.find((X) => X > 2);

// console.log(result)

// let result = array.findIndex((X) => X > 2);
// console.log(result);


// const studentScores = [95,78,85,60,45,92];
// const result = studentScores.map((studentScore )=> {if(studentScore >= 90 && studentScore <= 100){
//     return "A";

// }
// if (studentScore >= 80 && studentScore <= 89){
//     return "B";
// }
// if (studentScore >= 70 && studentScore <= 79){
//     return "C";

// }
// if (studentScore >= 60 && studentScore <= 69){
//     return "D"
// }
// else if  (studentScore <=60){
//     return "F"
// }
// });
// console.log(result)

// let user =() => {
//     let factor = 2;

//     const createMultipler = () => {
//         let number = 3;

//     }
// }



const shoppingList =[{name:'Apples',category:'fruits', isHealthy:true},
{name:'potato chips',category:'Snacks', isHealthy:false},
{name:'Carrots',category:'Vegetables', isHealthy:true},
{name:'Cholocate Bars',category:'Sweets', isHealthy:false},
{name:'Greek Yogurt',category:'Diary', isHealthy:true},
{name:'Soda',category:'Beverages', isHealthy:false}];

const result = shoppingList.filter((shoppingList) => shoppingList.isHealthy);
console.log(result)

healthyItems = [];
healthyItems.push(result);

healthyItems.forEach((result) => {
    for (const key of result){
        console.log(key.name)
    }
})