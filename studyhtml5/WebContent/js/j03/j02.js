 'use strict';
 
  let age = 23;
  let admissionFee = "";
  
  if(age < 13){
    admissionFee = "2,000원";
  }else {
    admissionFee = "4,000원";
  }
  
  console.log(`age: ${age}, admissionFee: ${admissionFee}`);
//  age: 23, admissionFee: 4,000원
