export default class Fruits {

    constructor() {
        //좌표 (캔바스 크기 (700,600))
        this.x = Math.floor(Math.random()*600);
        this.y = Math.floor(Math.random()*500);

        // 과일 랜덤으로 생성
        this.fruits = ['#apple', '#peach', '#watermelon','#strberry'];
        this.idx = Math.floor(Math.random()*4);

        //이미지로드
        this.img = document.querySelector(this.fruits[this.idx]);
        console.log(this.img);

        this.vx = 0;
        this.vy = 0;

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        this.vx = 0.1;
        this.vy = 0.1;

        this.x += this.vx;
        this.y += this.vy;
    }

    //클릭하면 과일 제거, 위임함수
    

 


}