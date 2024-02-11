sample_string = 'semicolon.africa'
count = {}
for(const key of sample_string){
    if (key in count) {
       count[key] = count[key] + 1;

    } else {
        count[key] = 1;
       
    }
   
        
    }
  
console.log(count)
    
    