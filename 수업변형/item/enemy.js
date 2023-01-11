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
        this.imgExpl = document.querySelector('#explposion');
        //[e]xplosion [i]ndex
        this.eix = 0;
        this.eiy = 0;

        //소스의 하나 크기( 20개 중)
        this.esw = this.imgExpl.width/4;
        this.esh = this.imgExpl.height/5;

        this.esx = this.exi * this.esw;
        this.esy = this.eyi * this.esh;
       



      

    }
    
    


    get width() {
        return this.img.width;
    }

    get height() {
        return this.img.height;
    }


    draw(ctx) {

        //전투기
        ctx.drawImage(this.img, this.x-this.img.width/2, this.y-this.img.height/2);
        //폭탄그림
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        
        ctx.drawImage(this.imgExpl,this.esx,this.esy,this.esw,this.esh,this.x-this.img.width/2,this.y-this.img.height/2,this.esw,this.esh);
                
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r1, 0, 2*Math.PI);
        ctx.stroke();
    }


    update() {
        this.y +=this.speed;
        if(this.y > 500)
            if(this.onOutOfScreen != null)  
                this.onOutOfScreen(this); //나 this를 게임캔바스로 넘기는것
    }
}