'use strict';

  function changeName(obj){
    
    obj.name = '이상무';
  }
  const pcwk = {name:'javaScript'};
  console.log(`before pcwk: ${pcwk.name}`);
  
  changeName(pcwk);
  console.log(`after pcwk: ${pcwk.name}`);
//  j07.js:8 before pcwk: javaScript
//  j07.js:11 after pcwk: 이상무