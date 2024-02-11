const {swapIndex} = require ('./swappingIndexArray')

test("input of a transpose array",() =>{
    let input = [[2,3],[4,5]];
    let output = swapIndex(input);
    expect(output).toEqual([[2,4],[3,5]]);


})