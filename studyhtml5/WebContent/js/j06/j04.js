'use strict';

  class Person{
    //생성자
    constructor(name,age){
      //멤버변수
      this.name = name;
      this.age = age;
    }
    
    //메서드
    speak(){
      console.log(`name: ${this.name}, age: ${this.age} speak!`);
    }
  }
  
  const pcwk = new Person('PCWK',23);
  //멤버변수
  console.log(`pcwk.name: ${pcwk.name}`);
//  j04.js:19 pcwk.name: PCWK
  console.log(`pcwk.age: ${pcwk.age}`);
//  j04.js:21 pcwk.age: 23
  pcwk.speak();
//  j04.js:13 name: PCWK, age: 23 speak!