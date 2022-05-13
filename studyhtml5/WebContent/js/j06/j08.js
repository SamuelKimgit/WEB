'use strict';
/*
  toFixed():  toFiexed(n)일 때 n값 만큼의 소수점 자릿수를 만들어 준다.(자릿수 이전 값은 반올림)
  toString(): toString(n)일 때 n값의 진수로 만들어 줍니다.
*/

// Number객체 생성
  let num01 = new Number(10);
  let num02 = 12;
  
  console.log(`num01+num02=${num01+num02}`);
//  j08.js:11 num01+num02=22

  let num = 328.575;
//toFixed():toFiexed(n)일 때 n값 만큼의 소수점 자릿수를 만들어 준다.
  console.log(`num.toFixed(1): ${num.toFixed(1)}`);
//  j08.js:16 num.toFixed(1): 328.6
  console.log(`num.toFixed(2): ${num.toFixed(2)}`);
//  j08.js:18 num.toFixed(2): 328.57
  console.log(`num.toFixed(): ${num.toFixed()}`);
//  j08.js:20 num.toFixed(): 329

  num = 12;
//toString():toString(n)일 때 n값의 진수로 만들어 줍니다.
  console.log(`num.toString(2): ${num.toString(2)}`);
//  j08.js:25 num.toString(2): 1100

// 소수점 아래 오차 발생 추측
  //소숫점 계산 : 32,200(예상) 콘솔값()32199.999999999996)
  console.log(`46000*0.7: ${46000*0.7}`);
  
  //46000*(0.7*10)/10
  console.log(`46000*(0.7*10)/10: ${46000*(0.7*10)/10}`);
//  j08.js:32 46000*(0.7*10)/10: 32200