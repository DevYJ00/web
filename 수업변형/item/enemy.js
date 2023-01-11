export default class Enemy {
#centerX
#centerY
#width
#height
    constructor(x,y) {

        this.x = x || 450;
        this.y = y || 350;
        //속도
        this.speed = 2;
        this.onOutOfScreen = null; //게임 캔바스에서 함수를 위임 했는지 안했는지 체크용.

        this.img = document.querySelector('#enemy');
       
        // console.log(this.img);
        
        // this.width = this.img.width;
        // this.height = this.img.height;

    }
    
    
    get centerX() {
        return this.x + this.img.width/2;
    }

    get centerY() {
        return this.y + this.img.height/2;
    }

    get width() {
        return this.img.width;
    }

    get height() {
        return this.img.height;
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