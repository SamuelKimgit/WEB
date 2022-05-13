/*
즉시 실행 함수        
  익명 함수 중에는 필요에 따라 일회성으로 사용되는 함수      
  선언과 동시에 함수가 실행되며, 함수명이 없으므로 재호출은 할 수 없다.      
문법)       
    (function( ) {      
      실행문;    
    } ) ( ) ;     
*/
'use strict';

(function(){
  life();
  
})();

function life(){
  console.log(`즉시 실행 함수!`);
}

let instant = (function(){
  console.log(`즉시 실행 함수2!!`);
  
})();