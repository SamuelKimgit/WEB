'use strict';
/*
  Math.random() 함수는 0이상 1미만의 구간에서 근사적으로 균일한(approximately uniform)
  부동 소숫점 의사난수를 반환하며, 이 값은 사용자가 원하는 범위로 변형할 수 있다.
  난수 생성 알고리즘에 사용되는 초기값은 구현체가 선택하며,
  사용자가 선택하거나 초기화할 수 있다.
*/
  //1~100 배열 설정, 이 중에 행운의 숫자 한 개 출력
  let luckyNumber = [];
  for(let i=1; i<=100; i++){
    luckyNumber.push(i);
  }
  
  console.log(`luckyNumber.toString(): ${luckyNumber.toString()}`);
  console.log(`Math.random(): ${Math.floor(Math.random() * luckyNumber.length)}`)
  let idx = Math.floor(Math.random() * luckyNumber.length);
  console.log(`luckyNumber[idx]=${luckyNumber[idx]}`);
/*
  j04.js:14 luckyNumber.toString(): 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
  16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
  40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
  64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,
  88,89,90,91,92,93,94,95,96,97,98,99,100
  
  j04.js:15 Math.random(): 7
  j04.js:17 luckyNumber[idx]=58
*/