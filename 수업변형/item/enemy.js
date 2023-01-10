export default class Enemy {

    constructor(x,y) {

        this.x = x || 450;
        this.y = y || 350;
        //속도
        this.speed = 2;
        this.onOutOfScreen = null; //게임 캔바스에서 함수를 위임 했는지 안했는지 체크용.

        this.img = document.querySelector('#enemy');
        // console.log(this.img);
        

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }


    update() {
        this.y +=this.speed;
        if(this.y > 500)
            if(this.onOutOfScreen != null)  
                this.onOutOfScreen(this); //나 this를 게임캔바스로 넘기는것
    }
}