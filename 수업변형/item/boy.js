class Boy { //  기본은 정면보는

    constructor(x, y) {
        //x,y : 출력 위치 값 안주면 (200,100) 위치
        this.x = x || 200;
        this.y = y || 100;

        this.vx = 0; //벡터x
        this.vy = 0; //벡터y

        this.dx = 0; //목적지x
        this.dy = 0; //목적지y

        
        this.img = document.querySelector('#boy');
        // this.console.log(this.img);

        this.ix = 1;
        this.iy = 2; //정면보는게 기본

        //이 부분은 손대지 않음.
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.ix * this.sw;
        this.sy = this.iy * this.sh;

        // 내가 추가한 부분 위치보정--------------------------------------------------
        // 변하는 현재 위치
        this.cx = 0;
        this.cy = 0;
        // 캐릭터 정 중앙 위치값 ---- 이거 처음에 있던 좌표도 받아야 가능함 
        this.mx = this.cx + this.sw/2;  
        this.my = this.cy - this.sh/2;
        // 내가 추가한 부분 위치보정--------------------------------------------------


        //속도 늦추기. (walkDelay 써도되긴함)
        // this.cp = 0;
        this.walkDelay = 10; //여기 50잡을 필요가있나? - 없음
    }

    draw(ctx) {
        this.sx = this.ix * this.sw; //그림을 그릴때마다 (sx는 그림을 그릴때 적용하는거고)
        this.sy = this.sh * this.iy; //그림을 그릴때마다 xy를 찾아야 함
        // var img = new Image();
        // img.src = './image/boy.png';
        // img.onload = function () {
        //     ctx.drawImage(img, this.sx, this.sy, this.sw, this.sh,this.x-this.sw/2, this.y-this.sh+15, this.sw, this.sh);  //이미지가 로드되면 띄워야겠지
        // }.bind(this); //밖 this는 boy니까 이게 더 보기 좋음 bind(boy1) 보다!
        ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh,this.x-this.sw/2, this.y-this.sh+15, this.sw, this.sh);

    };

    //처음에 멈추는거 전체를 if문으로 감싸고 vx가 0이 아닐때만 동작하도록
    update() {
        // this.ix 가 상태
        if(this.vx != 0) {
        this.walkDelay--;
        if(this.walkDelay ==0)
        {
            this.ix = this.dx == 0 ? this.ix = 1 : (this.ix == 2 ? 0 : 2);
            // this.ix = this.ix == 2 ? 0 : 2;
            //사진선택
            
            this.walkDelay = 10;
        }
    } else 
        this.ix = 1;

        // this.cp = this.cp + 3;

        // if (this.ix == 0) 
        //     this.ix = 2;
        // else 
        //     this.ix = 0;
        //코드 짧게 쓰려면 삼항연산자


      
        // if (this.cp%7 == 0) 
        // this.ix = 2;
        //     else 
        // this.ix = 0;

        

        // || 대신 && 한 이유 : 정밀하게 하다보면 범위 하나 벗어나버리면 무한히 가버리니까
        // 
        //보정 : 목적지를 1px 씩 + (범위로!)
        if(((this.x >this.dx) &&(this.x <this.dx+1)) && ((this.y >this.dy) &&(this.y <this.dy+1))){
            this.vx = 0;
            this.vy = 0;
            this.ix = 1;
        } 

   

        this.x += this.vx;
        this.y += this.vy;
        }

        // if((parseInt(this.dx) == parseInt(this.mx))) {
        //     this.x *=1;
        //     this.cx = this.dx;
        // }else {
        //     this.x +=this.vx;
        //     this.cy = this.dy;
        // }

        // if((parseInt(this.dy) == parseInt(this.my))) {
        //     this.y *=1;
        // }else {
        //     this.y +=this.vy;
        // }
        
        // console.log(`목적지 : ${this.dx, this.dy}`)
        // console.log(`현재위치 : ${this.mx, this.y}`)
    
        
    

    move(dir) {

        switch (dir) {
            case 1: //북쪽
                this.y -= 1;
                break;
            case 2: //동쪽
                this.x += 1;
                break;
            case 3: //남쪽
                this.y += 1;
                break;
            case 4: //서쪽
                this.x -= 1;
                break;
        }

    };

    moveTo(dx,dy) {
        /* 이렇게 해버리면 순간이동이 됨. this.x = boy의 x(d위치값)
        this.x = x;
        this.y = y;
        */
        // x,y까지 거리 1단위로 이동해야 함.
        // x, y는 사용자가 클릭(이벤트)한 위치 - 이걸 알아내야 함! 
        
        this.dx = dx;
        this.dy = dy;
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;
    }



}


//----------------------------------------------------------------23.01.04 클래스화해서
// 프로토타입 -> 클래스 메서드로 넣어줌 (객체마다 갖는 공통 메서드를 프로토타입에 두다가 클래스로)
// //공통으로 갖는 함수
// Boy.prototype = {
//     draw: function (ctx) {
//         var img = new Image();
//         img.src = './image/boy.png';
//         img.onload = function () {
//             ctx.drawImage(img, this.sx, this.sy, this.sw, this.sh,this.x, this.y, this.sw, this.sh);  //이미지가 로드되면 띄워야겠지
//         }.bind(this); //밖 this는 boy니까 이게 더 보기 좋음 bind(boy1) 보다!

//     },

//     move: function (dir) {
//         switch (dir) {
//             case 1: //북쪽
//                 this.y -= 1;
//                 break;
//             case 2: //동쪽
//                 this.x += 1;
//                 break;
//             case 3: //남쪽
//                 this.y += 1;
//                 break;
//             case 4: //서쪽
//                 this.x -= 1;
//                 break;
//         }
//     },

//     moveTo : function(x,y) {

//     }

    // clear : function() {     ctx.clear;
