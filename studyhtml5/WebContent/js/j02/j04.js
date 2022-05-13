
  'use strict';
  
  let infinity = 10/0;
  
  // infinity
  console.log(`infinity: ${infinity}`);
//j04.js:7 infinity: Infinity

  let negativeInfinity = -10/0;
  console.log(`negativeInfinity: ${negativeInfinity}`);
//j04.js:11 negativeInfinity: -Infinity

  let nAn = 'not a number'/10;
  console.log(`nAn: ${nAn}`);
//j04.js:15 nAn: NaN