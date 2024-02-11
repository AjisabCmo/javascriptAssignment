let input = [[2,3],[4,5]];
const transpose = input =>{
    for (let count = 0 ; count < input.length; count++){
        for (let index = 0 ; index < count ; index++){
            const learn = input[count][index];
            input[count][index] = input [index][count];
            input [index][count] = learn

        }
    }
}
transpose(input);
console.log(input);