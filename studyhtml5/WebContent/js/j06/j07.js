'use strict';
  class Shape{
    //생성자
    constructor(width,height,color){
      this.width = width; //넓이
      this.height = height; //높이
      this.color = color; //색상
    }
    draw(){
      console.log(`drawing: ${this.color} color!`);
    }
    
    getArea(){
      return this.width * this.height;
    }
    
  }
  
  // 사각형
  class Rectangle extends Shape{
    
  }
  
  // 사각형 class
  const rectangle = new Rectangle(10,10,'Red');
  
  rectangle.draw();
//  j07.js:10 drawing: Red color!
  console.log(`rectangle.getArea(): ${rectangle.getArea()}`);
//  j07.js:30 rectangle.getArea(): 100

  // 삼각형
  class Triangle extends Shape{
    // draw() 재정의
    draw(){
      //parent에 메서드 호출
      super.draw();
      console.log(`Triangle drawing Blue color!`);
    }
    
    // getArea() 재정의
    getArea(){
      //삼각형 넓이 구하기
      return (this.width*this.height)/2;
    }
    toString(){
      return `Triangle:color:${this.color}`;
    }
  }
  
  const triangle = new Triangle(10,10,'yellow');
  triangle.draw();
//  j07.js:10 drawing: yellow color!
//  j07.js:38 Triangle drawing Blue color!
  console.log(`triangle.getArea(): ${triangle.getArea()}`);
//  j07.js:55 triangle.getArea(): 50
  console.log(`triangle.toString(): ${triangle.toString()}`);
//  j07.js:57 triangle.toString(): Triangle:color:yellow

  //instanceof
  console.log(`triangle instanceof Shape: ${triangle instanceof Shape}`);
//  j07.js:61 triangle instanceof Shape: true

  //사각형과 삼각형의 관계
  console.log(`triangle instanceof rectangle: ${triangle instanceof Rectangle}`);
//  j07.js:65 triangle instanceof rectangle: false