'use strict';

  let sum = 0;
  for(let i=1; i<=10;i++){
    sum+=i;
    console.log(`sum: ${sum}, i: ${i}`);
    if(sum>=30){
      console.log(`sum 30이상: ${sum}, i: ${i}`);
      break;
    }
  }
  