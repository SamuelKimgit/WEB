'use strict';

  let str01 = '11';
  console.log(`str01: ${str01}, type: ${typeof str01}`);
//  j14.js:5 str01: 11, type: string

/* Number(): 문자형 숫자를 숫자로 변환 */
  console.log(`str01: ${Number(str01)}, type: ${typeof Number(str01)}`);
//  j14.js:9 str01: 11, type: number

  let str02 = '100px';
  console.log(`str01: ${str02}, type: ${typeof str02}`);
//  j14.js:14 str01: 100px, type: string

/* parseInt(): 문자형 숫자를 숫자로 변환( 22px -> 22 ) */
  console.log(`str02: ${parseInt(str02)}, type: ${typeof parseInt(str02)}`);
//  j14.js:17 str02: 100, type: number

  let str03 = '33.33%';
  console.log(`str01: ${str03}, type: ${typeof str03}`);
//  j14.js:21 str01: 33.33%, type: string

/* parseFloat(): 문자형 숫자를 실수로 변환 (  ) */
  console.log(`str03: ${parseFloat(str03)}, type: ${typeof parseFloat(str03)}`);
//  j14.js:25 str03: 33.33, type: number