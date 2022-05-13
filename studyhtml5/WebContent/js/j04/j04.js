/*
매개변수의 개수가 정해지지 않은 함수  
  arguments객체를 이용한 처리
  function showSubject( ) { 
    let args = arguments [ 0 ] + " , " + arguments [ 1 ] ;
  } 
  showSubject( 'html', 'css' ); 
*/
'use strict';

  function showSubject(){
    for(let i= 0; i<arguments.length; i++){
      console.log(`arguments[${i}] : ${arguments[i]}`);
    }
    
  }
  
//  showSubject('html','css','javaScript');
  showSubject('html','css','javaScript','jquery','jsp','spring');
/*  
  j04.js:13 arguments[0] : html
  j04.js:13 arguments[1] : css
  j04.js:13 arguments[2] : javaScript
  j04.js:13 arguments[3] : jquery
  j04.js:13 arguments[4] : jsp
  j04.js:13 arguments[5] : spring
*/