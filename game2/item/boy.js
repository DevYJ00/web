class Boy{
    constructor(x, y){
        this.x = x || 100;
        this.y = y || 100;
    
        this.vx = 0; // 이 만큼 계속 이동해감
        this.vy = 0;

        this.dx = 0; // 목적지
        this.dy = 0;

        // ------이미지를 그리기 위한 변수들--------------------------------
        this.img = document.querySelector('#boy');
        this.ix = 1;
        this.iy = 2;
        
        // 이제 이건 우리가 건들이지 않음
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

    }
    draw(ctx){
        // var img = new Image();
        // img.src = "./image/boy.png";
        
        // img.onload = function(){ // 다른놈이 호출하는 this는 다른 this
        //     // console.log(this.sw);
        // }.bind(this); // 중요!
        ctx.drawImage(img, 
        this.sx,this.sy,this.sw,this.sh,
        this.x,this.y,106,148.25);
    }

    update(){
        // this.x++;
        //보정 : 목적지를 1px 씩 + (범위로!)
        if(((this.x >this.dx) &&(this.x <this.dx+1)) && ((this.y >this.dy) &&(this.y <this.dy+1))){
            this.vx = 0;
            this.vy = 0;
        } 
        this.x += this.vx;
        this.y += this.vy;
        }

    moveTo(dx, dy){
        // this.x = x;
        // this.y = y; //이렇게 하면 한 번에 가버려서 안 됨
        
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;

    }

    move(dir){
        switch(dir){ // 10px씩
            case 1: // 북쪽
                this.y -= 1;
                break;
            case 2: // 
                this.x += 1;
                break;
            case 3: // 
                this.y += 1;
                break;
            case 4: // 
                this.x -= 1;
                break;
        }
    }
}

// 다른 곳에 위임해서 호출할 수 있다.
// 다른 객체 통해 호출하면 문제 있을 수도 
// this를 일관적으로 가져갈 수 있도록