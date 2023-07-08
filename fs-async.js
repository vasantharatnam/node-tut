const {readFile, writeFile} = require('fs');
 console.log('start');
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
     if(err){
         console.log(err);
         return;
     }
     const first = result;

     readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
          if(err){
              console.log(err);
              return;
          }
          const second = result;
    
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err) => {
           if(err){
               console.log(err);
               return;
           }
           console.log('finished with this task');
       })
     })

    })

    console.log('starting the next one');