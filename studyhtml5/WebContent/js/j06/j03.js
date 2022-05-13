'use strict';
/*
  for( let 변수 in 객체명 ) {  
    실행문;
  } 
*/
  let info = {
    subject: 'JavaScript',
    credit: 3,
    days: 20,
    tuition: 100
  }
  
  for(let i in info){
    console.log(`i=${i}, \t info[${i}]= ${info[i]}`);
  }
/*
  j03.js:15 i=subject,   info[subject]= JavaScript
  j03.js:15 i=credit,    info[credit]= 3
  j03.js:15 i=days,    info[days]= 20
  j03.js:15 i=tuition,   info[tuition]= 100
*/