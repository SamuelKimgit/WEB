/*
  return을 만나면 해당 함수를 호출한 곳으로 결과 데이터를 반환                         
*/

'use strict';
  function process(){
    let kor = 90;
    let eng = 88;
    let math = 90;
    
    let avg = (kor+eng+math)/3;
    
    return avg;
  }
  
  const avgResult = process();
  
  console.log(`avgResult: ${avgResult}`);