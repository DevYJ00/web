export default class Apple {

    constructor() {
      
      //좌표 (캔바스 크기 (700,600))
      this.x   = 0;
      this.y = 600;
  
      // //중력
      // this.g = -0.2;
      
      //스피드
      this.speed = (Math.random()*10)*0.15;

      //던지는 힘에 중력도 고려
      this.force = -this.speed*10;

      this.curForce = this.force;

      //이미지 로드
      this.img = document.querySelector('#apple');
      console.log(this.img)
  
    
   
    }
  
    draw(ctx) {
      ctx.drawImage(this.img,this.x,this.y);
  
    }
  
    update() {
      
      this.x += this.speed;
      this.y +=this.curForce += 0.01; //음수

      if(this.y >= 500){
        this.curForce = this.force;               
    }
    
    }
  
  }  