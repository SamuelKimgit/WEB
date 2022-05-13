'use strict';

// var 변수, 함수 호이스팅 (Hoisting)
// var변수와 함수는 컴파일러에 의해 호이스팅이 발생!
// 선언 전에 실행가능!
//  compute();

  function compute(){
    let x = 7;
    let y = 100;
    
    let result = x/y;
    console.log(`result: ${result}`);
//    j12.js:8 result: 0.1
  }
  
  compute();