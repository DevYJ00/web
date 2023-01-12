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

        //스피드
        this.speed  = (Math.random()*10)*0.15;

        //던지는 힘(+중력)
        this.force = -this.speed*10;
        this.curForce = this.force;

        

    }

   draw(ctx) {

    ctx.drawImage(this.img, this.x, this.y);

    ctx.beginPath();
   }

   update() {
    this.x += this.speed;
    this.y +=this.curForce += 0.01; //음수
   }


}