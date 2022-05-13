'use strict';

  let num01 = '100F';
  if(isNaN(num01) == true){
    console.log(`${num01}가 숫자가 아니면: ${isNaN(num01)}`);
  }else{
    console.log(`${num01}가 숫자 이면: ${isNaN(num01)}`);
  }
//  j13.js:7 100F가 숫자가 아니면: true

  let num02 = 1/0;
  if(isFinite(num02) == true){
    console.log(`${num02}가 유한 이면: ${isFinite(num02)}`);
  }else{
    console.log(`${num02}가 무한 이면: ${isFinite(num02)}`);
  }
//  j13.js:16 Infinity가 무한 이면: false