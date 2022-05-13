'use strict';
/*
    문자열        J a v a s c r i p t
  index   0 1 2 3 4 5 6 7 8 9

*/

  let str = 'javascript';
  console.log(`str: ${str}`);
//  j09.js:4 str: javascript

  //length:문자열의 길이
  console.log(`str.length: ${str.length}`);
//  j09.js:8 str.length: 10

  //charAt(n): n과 같은 index번호에 위치한 문자를 반환
  console.log(`str.charAt(8): ${str.charAt(8)}`);
//  j09.js:18 str.charAt(8): p

  //indexOf('a')
  //'a'를 왼쪽부터 문자를 검색해서 일치하는 index에 해당하는 문자index 반환
  console.log(`str.indexOf('a'): ${str.indexOf('a')}`);
//  j09.js:23 str.indexOf('a'): 1

  //lastIndexOf('a')
  //'a'를 오른쪽부터 문자를 검색해서 일치하는 index에 해당하는 문자index 반환
  console.log(`str.lastIndexOf('a'): ${str.lastIndexOf('a')}`);
//  j09.js:28 str.lastIndexOf('a'): 3

  //substring(4,9): 문자열 index번호 4부터 index 9이전 까지 출력 4 <= '' < 9
  console.log(`str.substring(4,9): ${str.substring(4,9)}`);
//  j09.js:32 str.substring(4,9): scrip : scrip 끝번호(9)는 포함되지 않음.

  //substr(4,6): index번호 4번부터 6개의 문자
  console.log(`str.substr(4,6): ${str.substr(4,6)}`);
//  j09.js:36 str.substr(4,6): script

  //split(''): ''(공백) 문자를 기준으로 문자열을 분할하고 return
  str = '010-1234-5678';
  let phoneNumArray = str.split('-');
  console.log(phoneNumArray[0]+''+phoneNumArray[1]+''+phoneNumArray[2]);
//  j09.js:42 01012345678

  //replace('x','y'): 'x'문자를 'y'문자로 치환
  str = 'Javascript'; // 소문자 'a'를 대문자'A'로 치환
  console.log(`${str.replace('a','A')}`);
//  j09.js:47 JAvascript

  //trim(): 문자열의 앞 뒤 공백 제거
  str = ' Javascript ';
  console.log(`str.trim: ${str.trim()}`);
//  j09.js:52 str.trim: Javascript

  //toLowerCase(); 소문자로
  //toUpperCase(); 대문자로
  console.log(`str.toUpperCase(): ${str.toUpperCase()}`);
  console.log(`str.toLowerCase(): ${str.toLowerCase()}`);
//  j09.js:57 str.toUpperCase():  JAVASCRIPT 
//  j09.js:58 str.toLowerCase():  javascript