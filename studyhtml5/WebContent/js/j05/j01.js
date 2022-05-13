'use strict';

  let info = {
    subject: 'javascript',
    credit: 5,
    printOut: function(){
      return this.subject + ',' + this.credit;
    }
  };
  
  console.log(`info.subject: ${info.subject}`);
  console.log(`info.credit: ${info.credit}`);
  console.log(`info.printOut: ${info.printOut()}`);
/*
  j01.js:11 info.subject: javascript
  j01.js:12 info.credit: 5
  j01.js:13 info.printOut: javascript,5
*/