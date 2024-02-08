// const prompt = require("prompt-sync")();

// const firstName = prompt ("whats is your first name: ")

// console.log(firstName)

const sum = (a,b) => {
    let ans = a + b ;
    return ans;
}
module.exports = {sum}


const myArray = [1,2,3,4];
newArray = [];
myArray.forEach((X) =>{
    let ans = X * 2 ;
    newArray.push(ans)
    console.log(newArray)

});