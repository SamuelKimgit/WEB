/**
  let 변수
  ECMAScript 2015(ES6)에서 추 가  
 */

  let num = 11;
  let num = 13;
// Uncaught SyntaxError: Identifier 'num' has already been declared
  console.log(num);
  
  // 변수,함수 호이스팅
  // 함수 내에서 아래쪽에 존재하는 변수가 끌어 올려지는 것.
  // 자바 스크립트 parser 내부적으로 끌어 올려서 처리된다.
  console.log(text); // 선언 + 초기화 안된 상태
  text = 'Hoisting'; // 선언 + 초기화 + 할당된 상태
  let text;
// j02.js:14 Uncaught ReferenceError: Cannot access 'text' before initialization
// at j02.js:14:15