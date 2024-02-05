let length = 3;
let width = 3;
let obj =[[{row :0,col :0 , value :"X"},
          {row :0,col :1 , value :"X"},
          {row :0,col :2 , value :"O"}],

          [{row :1,col :0 , value :"O"},
          {row :0,col :0 , value :" "},
          {row :1,col :2 , value :"X"}],

          [{row :2,col :0 , value :"X"},
          {row :2,col :1 , value :"O"},
          {row :2,col :2 , value :"O"}],

];
let arr = [[],[],[]];


    for (const count in obj){
        for (const counter in obj[count]){
           arr[count].push(obj[count][counter]["value"])
        }
    }



console.log(arr);