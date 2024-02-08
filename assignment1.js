let user = {
    firstName :"ismail ",
    last_name : "Ajiboye",
    sex: "Male",
    age : 33,
    cohort: 18,
    best_color: "blue ",
    location: "Alagbado"

};

let results =["firstName","last_name","sex","age","cohort","best_color","location"];

for (let count = 0 ; count < results.length ; count++){
    let result = results[count];
    console.log(user[result])
} 