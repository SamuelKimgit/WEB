'use strict';

  let char = 'java';
  let brendan = "brendan";
  const helloBrendan = 'Hello ' + "brendan";
  
  console.log(`char: ${char}, type: ${typeof char}`);
  console.log(`brendan: ${brendan}, type: ${typeof brendan}`);
  console.log(`helloBrendan: ${helloBrendan}, type: ${typeof helloBrendan}`);

  let str01 = '문자sms "문자"';
  console.log(`str01: ${str01}`);
  let str02 = "문자sms '문자'";
  console.log(`str02: ${str02}`);
//  let str03 = "문자sms "문자""; 적용안됨
//  let str04 = '문자sms '문자''; 적용안됨
  
/*  
  j06.js:7 char: java, type: string
  j06.js:8 brendan: brendan, type: string
  j06.js:9 helloBrendan: Hello brendan, type: string
  j06.js:12 str01: 문자sms "문자"
  j06.js:14 str02: 문자sms '문자'
*/