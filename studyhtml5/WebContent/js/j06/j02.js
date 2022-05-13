'use strict';

// 생성자 함수 
  function Triangle(b,h){
    this.base = b;
    this.height = h;
  };
  
// 동적추가된 함수   
  Triangle.prototype.area = function(){
    return this.base * this.height / 2;
  };
  
// 동적추가된 함수
  Triangle.prototype.printOut = function(){
    return '밑변: '+this.base+', 높이: '+this.height+', 넓이: '+this.area();
  }
  
  let triangle01 = new Triangle(10,10);
  console.log(`triangle01.area: ${triangle01.area()}`);
//  j02.js:15 triangle01.area: 50
  console.log(`triangle01.printOut: ${triangle01.printOut()}`);
//  j02.js:22 triangle01.printOut: 밑변: 10, 높이: 10, 넓이: 50