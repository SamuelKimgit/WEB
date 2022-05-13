 'use strict';
 
  let age = 11;
  let preIncrement = ++age;
  console.log(`preIncrement: ${preIncrement},age: ${age}`);
//  preIncrement: 12,age: 12

  age = 11;
  preIncrement = age++;
  console.log(`preIncrement: ${preIncrement},age: ${age}`);
//  preIncrement: 11,age: 12