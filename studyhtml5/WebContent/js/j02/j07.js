'use strict';
/*
  \n : 행 바꿈(줄 바꿈)                                  
  \t : 탭 문자                                  
  \\ : 역슬러시                                  
  \' : 작은따옴표( Single quotation marks )                                 
  \" : 큰따옴표 ( Double quotation marks )                                 
*/
  let str01 = "you \'re too smart.";
  let str02 = "자바스크립트 \n jquery";
  let str03 = "자바스크립트 \t jquery";
  console.log(`str01: ${str01}`);
  console.log(`str02: ${str02}`);
  console.log(`str03: ${str03}`);
 /* 
  j07.js:12 str01: you 're too smart.
  j07.js:13 str02: 자바스크립트 
 jquery
  j07.js:14 str03: 자바스크립트    jquery
 */