'use strict';
//1~45 사이에 중복되지 않게 6개의 숫자를 출력하시오.
  let lottoNumber = [];
  for(let i=1; i<=45; i++){
    lottoNumber.push(i);
  }
//  console.log(`${lottoNumber.toString()}`);

  //섞어섞어
  let temp = 0; // 두 값을 바꾸는데 필요한 빈 컵
  let idx = 0;  // 임의 배열 index용 변수
  for(let i=0; i<20; i++){
    idx = Math.floor(Math.random()*45);
//    console.log(`idx: ${idx}, ${lottoNumber[idx]}`);
    
    // 자리교환
    temp = lottoNumber[i];
    lottoNumber[i] = lottoNumber[idx];
    lottoNumber[idx] = temp;
  }
  
  //filter
  let lottoBox = lottoNumber.filter(function(value,index,array){
    return index<6;
  });
  
  console.log(`행운의 번호: ${lottoBox.toString()}`);
  
  //sort()
  lottoBox.sort(function(a,b){
    return a-b;
  });
//after sort: 6,13,16,18,27,35
//after sort: 4,13,15,16,17,35
//after sort: 8,14,17,26,38,45
//after sort: 8,15,16,31,34,37
//after sort: 7,15,17,26,43,45
  console.log(`after sort: ${lottoBox.toString()}`);