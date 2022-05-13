'use strict';

  let numArray = [10,20,30,40,50,60,70];
  let sum = 0;
  
  numArray.forEach(function(value,index,array){
    console.log(`value: ${value}`);
//    console.log(`index: ${index}`);
//    console.log(`index:${index},${array}`);
    sum+=value;
  });
  console.log(`sum= ${sum}`);
  
  console.clear();
  
/*
  map()
  기존배열을 이용해 새로운 배열을 생성
 */

  let base = [1,2,3];
  let newArray = base.map(function(value,index,array){
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
    return value*2;
  });
  
  console.log(`newArray.toString: ${newArray.toString()}`);
/*
  j03.js:23 value: 1, index: 0, array: 1,2,3
  j03.js:23 value: 2, index: 1, array: 1,2,3
  j03.js:23 value: 3, index: 2, array: 1,2,3
  j03.js:27 newArray.toString: 2,4,6
*/

  console.clear();

/*
  filter()
  조건에 맞는 배열의 요소들만 걸러 새로운 배열 생성
*/
  let data = ['JAVASCRIPT',20,30,'JQUERY'];
  
  let numArray02 = data.filter(function(value,index,array){
    console.log(`type: ${typeof value}, value: ${value}, index: ${index}, array: ${array}`);
    return typeof value === 'string';
    
  });
  console.log(`numArray02.toString(): ${numArray02.toString()}`);
//  j03.js:48 numArray02.toString(): 20,30 - return typeof value === 'number';
//  j03.js:48 numArray02.toString(): JAVASCRIPT,JQUERY - return typeof value === 'string';