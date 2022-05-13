'use strict';

//더하기 함수
  function add(num1,num2){
    return num1 + num2;
  }
  
//곱하기 함수
  function multiply(num1,num2){
    return num1 * num2;
  }  
  
  function surprise(callback){
    const result = callback(11,10);
    
    console.log(`result: ${result}`);
  }
  
  surprise(add);
//  j06.js:11 result: 21
  surprise(multiply);
//  j06.js:16 result: 110