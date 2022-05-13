/*
  전역변수와 지역변수    
    전역변수 : 함수블럭 { } 밖에 선언된 변수 (함수 안과 밖에서 자유롭게 사용 가능)  
    지역변수 : 함수블럭 { } 안에 선언된 변수 (함수 안에서만 사용 가능) 
*/
'use strict';
//  전역변수
  let kor = 90;
  function getScore(){
    kor = 100;  
    console.log(`kor: ${kor}`);
  }
  getScore();
//  j08.js:11 kor: 100
  console.log(`kor: ${kor}`); //전역변수
  
//  console.clear(); // console.로그 지우기 
//  j08.js:17 Console was cleared
  
//  지역변수
  let eng = 90;
  function getEngScore(){
    let eng = 100; //지역변수
    console.log(`eng= ${eng}`);
//    j08.js:24 eng= 100
  }
  getEngScore();
  console.log(`eng= ${eng}`);
//  j08.js:28 eng= 90