 'use strict';
 /*
 동적 타입  
  dynamically typed language
 */
 
  let text = 'S_PCWK';
  console.log(`text: ${text}, type: ${typeof text}`);
// text: S_PCWK, type: string

  text = 11;
  console.log(`text: ${text}, type: ${typeof text}`);
//  text: 11, type: number

  text = '1'/'5';
  console.log(`text: ${text}, type: ${typeof text}`);
//  text: 0.2, type: number

  text = '1'+ 5;
  console.log(`text: ${text}, type: ${typeof text}`);
//  text: 15, type: string