'use strict';

  let dateObj = new Date(2022,6,12,14,10,45); // ()비우면 sysdate
  
  let dateInfo = {
    year        : dateObj.getFullYear(),    // 주어진날짜의 현지 년도 4자리
    month       : dateObj.getMonth()+1,     // 월은 0부터 시작합니다. 0~11 +1필요
    day         : dateObj.getDate(),        // 일(1~31)
    week        : dateObj.getDay(),         // 요일(0은 일요일)
    hours       : dateObj.getHours(),       // 시간
    minutes     : dateObj.getMinutes(),     // 분
    seconds     : dateObj.getSeconds(),     // 초
    miliseconds : dateObj.getMilliseconds() // 1000분의 1초
  };
  
  for(let i in dateInfo){
    console.log(`${i}:${dateInfo[i]}`);
  }
/*
  j06.js:17 year:2022
  j06.js:17 month:7
  j06.js:17 day:12
  j06.js:17 week:2
  j06.js:17 hours:14
  j06.js:17 minutes:10
  j06.js:17 seconds:45
  j06.js:17 miliseconds:0
*/