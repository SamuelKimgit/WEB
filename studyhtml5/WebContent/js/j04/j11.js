/*
  클로져 ( Closure ) 
    일반적으로 함수 내 지역변수는 함수 밖에서 참조할 수 없다.
    클로져는 함수 내 지역변수를 함수 밖에서 참조할 수 있다.
*/
'use strict';

  function multiply(n){
    
    return function(){
      return n*=n; // n = n*n;
    }
  }
  
  let num01 = multiply(10);
  console.log(`num01: ${num01()}`);
//  j11.js:16 num01: 100
  console.log(`num01: ${num01()}`);
//  j11.js:17 num01: 10000

  let num02 = multiply(3);
  console.log(`num02: ${num02()}`);
//  j11.js:22 num02: 9
  console.log(`num02: ${num02()}`);
//  j11.js:24 num02: 81