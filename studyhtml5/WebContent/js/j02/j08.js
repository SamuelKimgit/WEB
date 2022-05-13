 'use strict';
/*
 boolean 타입 
  true / false 값 표현
  false : 0 , null , undefined, NaN, ' '
  true : 0이외의 값이 있는 경우
*/

  let canRead = true;
  let test = 3<1;
  console.log(`value: ${canRead}, type: ${typeof canRead}`);
  console.log(`value: ${test}, type: ${typeof test}`);
  
  let pcwkBooleanFalse = 0;
  let pcwkBooleanTrue = 1;
  
  console.log(`value: ${Boolean(pcwkBooleanFalse)}`);
  console.log(`value: ${Boolean(pcwkBooleanTrue)}`);
  
  let nothing = null;
  console.log(`value: ${Boolean(nothing)}`);
  
  let x;
  console.log(`value: ${x}`);
  console.log(`value: ${Boolean(x)}`);
 /* 
  j08.js:11 value: true, type: boolean
  j08.js:12 value: false, type: boolean
  j08.js:17 value: false
  j08.js:18 value: true
  j08.js:21 value: false
  j08.js:24 value: undefined
  j08.js:25 value: false
 */