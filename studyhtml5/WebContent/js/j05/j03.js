'use strict';

  function Info(subject, credit){
    this.subject = subject;
    this.credit = credit;
    
    this.printOut = function(){
      return this.subject + ',' + this.credit;
    }
  }
  
  let subject01 = new Info('javascript',5);
  let subject02 = new Info('css',5);
  
  console.log(`subject01.subject: ${subject01.subject}`);
//  j03.js:15 subject01.subject: javascript
  console.log(`subject01.credit: ${subject01.credit}`);
//  j03.js:17 subject01.credit: 5
  console.log(`subject01.printOut: ${subject01.printOut()}`);
//  j03.js:19 subject01.printOut: javascript,5

  console.log(`subject02.subject: ${subject02.subject}`);
//  j03.js:22 subject02.subject: css
  console.log(`subject02.credit: ${subject02.credit}`);
//  j03.js:24 subject02.credit: 5
  console.log(`subject02.printOut: ${subject02.printOut()}`);
//  j03.js:26 subject02.printOut: css,5

