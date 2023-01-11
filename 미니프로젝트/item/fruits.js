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


    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        this.x = this.x;
        this.y = this.y;
    }

 


}