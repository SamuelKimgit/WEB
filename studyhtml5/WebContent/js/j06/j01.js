'use strict';

// 객체 리터럴

  let circle = {
    color: 'yellow',
    diameter: 100,
    radius: function(){
      return this.diameter/2;
    }
  };
  
  console.log(`circle.color: ${circle.color}`);
//  j01.js:13 circle.color: yellow
  console.log(`circle.diameter: ${circle.diameter}`);
//  j01.js:15 circle.diameter: 100
  console.log(`circle.radius: ${circle.radius()}`);
//  j01.js:17 circle.radius: 50

  console.clear(); // 위 console내용 출력제한 
//  j01.js:20 Console was cleared

// 객체 생성자 함수
  function Triangle(b,h){
    this.base = b;
    this.height = h;
    this.area = function(){
      return this.base * this.height / 2;
    };
    
  }
  
  let triangle01 = new Triangle(10,10);
  let triangle02 = new Triangle(20,10);
  
  console.log(`triangle01.base: ${triangle01.base}`);
//  j01.js:36 triangle01.base: 10
  console.log(`triangle01.height: ${triangle01.height}`);
//  j01.js:38 triangle01.height: 10
  console.log(`triangle01.area: ${triangle01.area()}`);
//  j01.js:40 triangle01.area: 50

  console.log(`triangle02.base: ${triangle02.base}`);
//  j01.js:43 triangle02.base: 20
  console.log(`triangle02.height: ${triangle02.height}`);
//  j01.js:45 triangle02.height: 10
  console.log(`triangle02.area: ${triangle02.area()}`);
//  j01.js:47 triangle02.area: 100