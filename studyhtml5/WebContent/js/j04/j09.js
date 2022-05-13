'use strict';
// 함수레벨 스코프와 블록레벨 스코프  
/*
    var 함수{}에서만 지역 변수 존재
    (불록{}, 제어문 블록{} 에서는 지역 변수가 존재하지 않는다.)
*/
  var num = 11;
  {
    var num = 20;
    console.log(`num: ${num}`);
//    j09.js:10 num: 20
  }
  console.log(`num: ${num}`);
//    j09.js:13 num: 20
  
  console.clear();
  
/*
  let, const는 블록{}, 제어문 블록{} 에서도 지역변수를 선언 할 수 있다.
*/
  let num01 = 11;
  {
    let num01 = 20;
    console.log(`num01: ${num01}`);
//    j09.js:25 num01: 20
  }
  console.log(`num01: ${num01}`);
//  j09.js:27 num01: 11

  console.clear();

  const num02 = 11;
  {
    const num02 = 23;
    console.log(`num02: ${num02}`);
//    j09.js:35 num02: 23
  }
  console.log(`num02: ${num02}`);
//  j09.js:38 num02: 11