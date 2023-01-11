export default class Apple {

    constructor() {
      
      //좌표
      this.x   = 100;
      this.y = 100;
  
      //중력
      this.g = 1;
      
  
      //벡터
      this.vx = 10; 
      this.vy = -20;
  
      
  
      
  
      //이미지 로드
      this.img = document.querySelector('#ap-w');
      console.log(this.img)
  
      //스피드
      this.xSpeed = 1;
      // this.ySpeed 
    }
  
    draw(ctx) {
      ctx.drawImage(this.img,this.x,this.y);
  
    }
  
    update() {
      
      //setta : 0 ~ 2/PI
     //  let setta = Math.random() * (2/Math.PI);
     //  console.log(setta);
     let setta = Math.PI / 4;
  
     this.vx = Math.cos(setta) * this.speed;
     this.vy = Math.sin(setta) * this.speed
  
     this.vy +=this.g;
     this.y += this.vy;
     this.x += this.vx;
  
    
    }
  
  }