import context from '../item/context.js';

export default class Watermelon {

    constructor() {
        // (캔바스 크기 (700,600)
        this.x = Math.random()*650 + 50
        this.y = -10;

        //이미지 로드
        this.img = document.querySelector('#watermelon');

        //과일 중심좌표
        this.cx = this.x + this.img.width/2;
        this.cy = this.y + this.img.height/2;

        this.vx = 0.1;
        this.vy = 0.1;



        // //스피드
        this.speed  = (Math.random()*10)*0.15;

        // //던지는 힘(+중력)
        // this.force = -this.speed*10;
        // this.curForce = this.force;

        this.nofifyClick = null;

        

    }

   draw(ctx) {

    ctx.drawImage(this.img, this.x, this.y);

    
   }

   update() {
    this.x += this.vx;
    this.y += this.vy;
    // this.y +=this.curForce += 0.01; //음수
   }

   notifyClick(x,y) {
    this.ex = x;
    this.ey = y;
    if(this.ex-10< this.x || this.x <this.ex+10) {
        console.log("나야");
        //자기면 과일 제거하기
        // console.log(context.watermelons);
        // context.watermelons = null;
        // console.log(context.watermelons);
        let idx = context.watermelons.indexOf(this);
        console.log(idx);

    }   

        


   } 




}