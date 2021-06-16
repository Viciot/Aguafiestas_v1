function countMyHits(myHits){
    let counts = {}
    for(let i = 0; i < myHits.length; i++){ 
        if (counts[arr[i]]){
        counts[myHits[i]] += 1;
        } else {
        counts[myHits[i]] = 1;
        }
       }  
       for (let prop in counts){
           if (counts[prop] >= 1){
               console.log(prop + " counted: " + counts[prop] + " times.")
           }
       }
     console.log(counts);
   }
   
   countMyHits(myHits);

   function countRivalHits(rivalHits){
       let counts = {}
       for(let i = 0; i < rivalHits.length; i++){ 
           if (counts[rivalHits[i]]){
           counts[rivalHits[i]] += 1;
           } else {
           counts[rivalHits[i]] = 1;
           }
          }  
          for (let prop in counts){
              if (counts[prop] >= 1){
                  console.log(prop + " counted: " + counts[prop] + " times.")
              }
          }
        console.log(counts);
      }
      
      countRivalHits(rivalHits);