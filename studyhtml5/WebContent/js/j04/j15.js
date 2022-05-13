/* 문자를 자바스크립트 코드로 변경 */
//'use strict';

// eval : use strict 사용 불가.(타이트하게 검사)
// let 변수는 안됨, var변수만 가능

  var str01 = 'var num01 = 11';
  var str02 = 'var num02 = 13';
  
  eval(str01);
  eval(str02);
//  num01 + num02 = 24
  console.log(`num01+num02=${num01+num02}`);