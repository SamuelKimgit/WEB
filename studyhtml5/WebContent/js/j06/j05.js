'use strict';
  
  class User{
    //생성자
    constructor(name,passwd,age){
      this.name = name;
      this.passwd = passwd;
      this.age = age;
    }
    
    //getter
    get getAge(){
      return this.age;
    }
    
    //setter
    set setAge(value){
      if(value < 0){
        value = 0;
      }
      this.age = value;
    }
  }
  
  const user01 = new User('PCWK','1234',-1);
  console.log(`name: ${user01.name}`);
//  j05.js:26 name: PCWK
  console.log(`passwd: ${user01.passwd}`);
//  j05.js:28 passwd: 1234

  //setter
  user01.setAge = -1;
  
  //getter
  // setter에서 value<0 이면 0으로 되도록 구성
  console.log(`age: ${user01.getAge}`);
//  j05.js:33 age: 0
