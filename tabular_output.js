let n = 0;
let n1= 0;
let n2 = 0;
let n3 = 0;

console.log("  n \tn1 \tn2 \tn3");
for (let count = 1;count <=5;count++){
    n=count ;
    n1=count*count;
    n2=count*count*count;
    n3=count*count*count*count;

    console.log(`  ${n}  \t${n1}  \t${n2}  \t${n3}`)
}