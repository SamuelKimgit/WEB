'use strict';

  let i = 1;
  let sum = 0;
  
  do{
    sum+=i;
    console.log(`i: ${i}`);
    i++;
  }while(i<=10);
  
  console.log(`sum: ${sum}`);
  
﻿/*
  j07.js:8 i: 1
  j07.js:8 i: 2
  j07.js:8 i: 3
  j07.js:8 i: 4
  j07.js:8 i: 5
  j07.js:8 i: 6
  j07.js:8 i: 7
  j07.js:8 i: 8
  j07.js:8 i: 9
  j07.js:8 i: 10
  j07.js:12 sum: 55
*/