'use strict';

  let info = {
    subject: 'javascript',
    credit: 5,
    printOut: function(){
      return this.subject + ',' + this.credit;
    }
  };

/* 속성 추가 !!*/   
  info.days = 7;
  console.log(`info.days: ${info.days}`);
//  j02.js:12 info.days: 7

/* 속성 삭제 !!*/
  delete info.credit;
  console.log(`info.credit: ${info.credit}`);
//  j02.js:18 info.credit: undefined

/* 메서드 속성 변경!!*/
  info.printOut = function(){
    return this.subject + ',' + this.days;
  }
  
  console.log(`info.printOut: ${info.printOut()}`);
//  j02.js:26 info.printOut: javascript,7