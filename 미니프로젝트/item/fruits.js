import Enemy from '../../수업변형/item/enemy.js';
import context from '../item/context.js';

export default class Fruits {

    constructor() {
        //좌표 (캔바스 크기 (700,600))
        this.x = Math.floor(Math.random()*600);
        this.y = 500;

        // // // 과일 랜덤으로 생성
        // this.fruits = ['#apple', '#peach', '#watermelon','#strberry'];
        // // this.idx = Math.floor(Math.random()*4);

        // // //이미지로드
        // // this.img = document.querySelector(this.fruits[this.idx]);
        // // console.log(this.img);

        // this.img = document.querySelector(this.fruits[0]);

        // this.vx = 0;
        // this.vy = 0;

        // // 좌표 넘겨받기
        // this.clickX = context.clickX;

        //스피드
        this.speed = (Math.random()*10)*0.15;
              //던지는 힘에 중력도 고려
        this.force = -this.speed*10;

        this.curForce = this.force;
              //이미지 로드
        this.img = document.querySelector('#peach');
        console.log(this.img)

        //이미지 중심 좌표
        this.ex = this.x + this.img.width/2
        this.ey = this.y - this.img/height/2
        

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);

        ctx.beginPath();
        ctx.arc(this.x, this.y, 20,0, 2*Math.PI);
        ctx.stroke();

    }

    update() {

        //
        this.vx = 1;
        this.vy = -3;
        
        this.x += this.vx;
        this.y += this.vy;
        
        if(this.y < 200 )
            this.vy = 5;
        
        
        // if(this.clickX -50 < this.x || this.x < this.clickX +50) {
        //  let idx = context.fruits.indexOf(this);
        //         console.log("출력해줘!!" + idx);
        //         context.fruits.splice(idx,1);
        // }

        
        // console.log(this.clickX);
        // for(let fruit of this.fruits) 
            
        //     if( this.clickX -50 < this.x && this.x < this.clickX +50 ) {
        //         let idx = context.fruits.indexOf(fruit);
        //         console.log("출력해줘!!" + idx);
        //         context.fruits.splice(idx,1);
        //     }

         


    }

    //클릭하면 과일 제거, 위임함수 - 클릭(게임캔바스) -
    

 


}