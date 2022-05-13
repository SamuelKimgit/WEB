'use strict';
/*
  for … in문
  배열의 인덱스를 반환
*/
  let city = ['미국','영국','필리핀','아이슬란드'];
  
  for (let i in city){
    console.log(`i: ${i}, city[${i}]: ${city[i]}`);
  }
/*  
  j02.js:5 i: 0, city[0]: 미국
  j02.js:5 i: 1, city[1]: 영국
  j02.js:5 i: 2, city[2]: 필리핀
  j02.js:5 i: 3, city[3]: 아이슬란드
*/

/*
  for ... of문
  javascript의 향상for문
*/  
  for(let i of city){
    console.log(`i:${i}`);
  }
/*
  j02.js:22 i:미국
  j02.js:22 i:영국
  j02.js:22 i:필리핀
  j02.js:22 i:아이슬란드
*/