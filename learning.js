// let number = "1";
// let numberOne = 1;
// let numberTwo ;
// let myArray = null

// console.log(typeof number) 
// console.log(typeof numberOne)
// console.log(typeof numberTwo)
// console.log(myArray)


// function user(name,age){
//     return {name,age}
// }

// let userOne = new user("ismail",33)
// let userTwo = new user("Abdullahi",1)

// console.log(userOne)
// console.log(userTwo)

// let user = {
//     firstname: "abbey",
//     lastname:" ajiboye",

//     age: 30
// };
// console.log(user["firstname"] + user["lastname"])

// let key = "firstname";
// console.log(user[`firstname`])
// console.log(user[`${key}`])


// let cohortNumber = 18;
// console.log(`this is cohort ${cohortNumber}`);

// let user ={
//     id : 1,
//     available : true,
//     count : 3,
//     name : "abbey",
//     author : "ismail"
// };
// console.log(user)
// user.name = "simbiat";
// console.log(user)

// let age = 24;
// // let output = (age > 16 ) ? console.log(true): console.log(false);
// if (age > 16){
//     console.log(true)
// }else if (age > 35){
//     console.log(false)
// }else{
//     console.log(false)
// }


// let age = 5 ;
// let answer = (age > 16)? console.log(true): (age > 20)? console.log(true):console.log("you are a kid");


// let myArray = [1,2,3,4,5]
// myArray.push(45)
// console.log(myArray)


// myArray.pop(45)
// console.log(myArray)

// myArray.shift()
// console.log(myArray)


// let left_operand = 3;
// let right_operand = 2;
// let operator = "+" ;
// // let operator = "+" ? console.log(left_operand + right_operand)

// if (operator == "+"){
//     console.log(left_operand + right_operand)
// }else if (operator ==  "-"){
//     console.log(left_operand - right_operand)
// }else if (operator == "*"){
//     console.log(left_operand * right_operand)
// }else if(operator == "/"){
//     console.log(left_operand / right_operand)

// }else if (operator == "%"){
//     console.log(left_operand % right_operand)
// }else{
//     console.log(NAN)
// }

// arrow function
// function arr(){

// }
// let newArray = function(){

// }
// const myArr = (x,y)=>{
//     const sum = x + y;
//     console.log(sum);
// }



// myArr(2,5)


// let birthYears = [2000,1972,1999,2001]
// let currentYear = 2024;


// const getResultArray = (arr,func) => {
//     const result = [];

//     for (let birthYear of arr) {
//         let value = func(birthYear);

//         result.push(value);
        
//     }
//     return result;
// }
// const calculateAge = (birthYear) =>{
//     let age = currentYear - birthYear;
//     return age;
// }

// let age = getResultArray(birthYears,calculateAge);
// console.log(age)





// function of an object

function questions(role){
    switch(role){
        case 'manager':
            return function(role){
            return `Hi ${role} what is the core value of the company?`;
            };
              
            case 'native':
                return function(role){

                return `Hi ${role},what is your best programming language?`;
              };
                case 'elders':
                    return function(role){
                    return `Hi ${role},do you love your job?`;
                    };
                    default:
                        return;
    }
}
// let answer = questions('manager');
// console.log(answer);
// console.log(answer('manager'))
// let answer = questions('native');
// console.log(answer);
// console.log(answer('native'))
let answer = questions('elders');
console.log(answer);
console.log(answer('elders'))

