/*
  Arrow function    
    => 를 이용해서 함수를 간결하게 표현.  
    
  익명 함수 형식으로 표현할 수 있다.  
  단일 명령어의 경우 함수 중괄호{}와 return문을 생략할 수 있다. 
*/
'use strict';
  const doAdd = (s1,s2) => s1+s2;
  console.log(`(s1,s2) => s1+s2: ${doAdd(11,13)}`);
//  j05.js:10 (s1,s2) => s1+s2: 24
  
  const doAdd2 = (s1,s2) => {
    let avg = (s1+s2)/2;
    return  
  };
  console.log(`doAdd02: ${doAdd(11,13)}`);