import newlec from '../newlec.js';

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
        this.isChungdol = false

        this.img = document.querySelector('#enemy');
        this.imgExpl = document.querySelector('#explposion');
        //[e]xplosion [i]ndex
        this.eix = 0;
        this.eiy = 0;
        //폭탄 이동시키기 위한 변수
        this.count = 0;

        //소스의 하나 크기( 20개 중)
        this.esw = this.imgExpl.width/4;
        this.esh = this.imgExpl.height/5;
        console.log(this.esw, this.esh)

        //그림 좌표
        this.esx = this.eix * this.esw;
        this.esy = this.eiy * this.esh;
        console.log(this.esx, this.esy);
       



      

    }
    
    


    get width() {
        return this.img.width;
    }

    get height() {
        return this.img.height;
    }

    chungdol() {
        this.isChungdol = true;
    }


    draw(ctx) {

        //전투기
        ctx.drawImage(this.img, this.x-this.img.width/2, this.y-this.img.height/2);
        
        // ctx.drawImage(this.imgExpl,0, 0);
        
        if(this.isChungdol) {
        //폭탄그림 - 충돌났을때 그려져야 함 (그림 18개가 그려져야 함) - eix, eiy 변경
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // for(eiy = 1; eiy < 5; eiy++)
        //     for(eix = 1; eix < 4; eix++) <- 여기가 아니라 변화하는거니까 update
                console.log('충돌');
                this.count++;
                this.eix = Math.floor(this.count%4);
                this.eiy = Math.floor(this.count/4);    
                console.log(this.eix, this.eiy);
                this.esx = this.eix * this.esw;
                this.esy = this.eiy * this.esh;
                console.log(this.esx, this.esy);//여기서 업데이트가안되네! esx, esy 값 업데이트하려면 꼭 저렇게 써야하나?
                
                ctx.drawImage(this.imgExpl,this.esx,this.esy,this.esw,this.esh,this.x-this.esw/2,this.y-this.esh + 15,this.esw,this.esh);
                if(this.count == 18) {
                newlec.enemies.splice(newlec.enemies.indexOf(this),1);
                this.count = 0;
                }
                
                    
                
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.img.width/2, 0, 2*Math.PI);
        ctx.stroke();
        }
    }


    update() {
        this.y +=this.speed;


        



        if(this.y > 500)
            if(this.onOutOfScreen != null)  
                this.onOutOfScreen(this); //나 this를 게임캔바스로 넘기는것
    }
}