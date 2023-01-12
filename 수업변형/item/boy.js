import newlec from "../newlec.js";

export default class Boy { //  기본은 정면보는

    // #vx; // 자바의 private같은 기능

    #speed; //선언만 - 초기화는 생성자에서

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
        this.sw = this.img.width/3;
        this.sh = this.img.height/4;
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
        this.dir = 0;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;

        this.#speed = 1; //같은 클래스내니까 set아니고 바로 접근해서 초기화 가능! 같은 모듈이아니라면 set,get 이용
        

        //r1, r2용
        this.r1 = 0;
        this.r2 = 0;
        
        //전투기 좌표
        this.ex = 0;
        this.ey = 0;


    }

    //setter, getter를 좀 더 은닉성 있게 표현하는 방법 - 외부에서 접근할 수 있도록 set, get 제공
    set speed(value) {
        this.#speed = value;
    }

    get speed() {
        return this.#speed;
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


        //캐릭터랑 원이랑 맞나 그려보기

        //그림그릴때 끝내는 부분인데, 워낙 자주그리다보니 합쳐서
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.img.width/7 ,0, 2*Math.PI);
        ctx.stroke();

    };

    //처음에 멈추는거 전체를 if문으로 감싸고 vx가 0이 아닐때만 동작하도록
    update() {

        console.log(newlec.enemies.length);
        for(let enemy of newlec.enemies) {
            
            //전투기 중앙값
            this.ex = enemy.x;
            this.ey = enemy.y;

            let x = this.x;
            let y = this.y;

            let d = Math.sqrt((this.ex - x)*(this.ex - x) + (this.ey-y)*(this.ey-y));
             
            //r1 (전투기 반지름)
            let enemyWidthHalf = enemy.width/2;
            let enemyHightHalf = enemy.height/2;
            this.r1 = Math.sqrt(enemyWidthHalf*enemyWidthHalf + enemyHightHalf*enemyHightHalf) ;
            // r2 : boy 반지름
            this.r2 = Math.sqrt(this.sw/2 * this.sw/2 + this.sh/2 * this.sh/2 ) ;
            let r1r2 = this.r1+this.r2;

            if(d <= r1r2) {
                
                enemy.chungdol();
                console.log("충돌");
                //충돌하면 -> 폭탄이미지 18개띄워주고 -> 비행기 제거

                //충돌하면 장면전환 - 위임 받은 함수(callback)를 호출
                if(this.onNoLife) // - boy가 태어날때 이 함수를 갖도록 부여(게임캔바스)
                    this.onNoLife();

                // if(onRemoveEnemy != null)
                //     this.onRemoveEnemyByConflict(enemy);

                //충돌하면 전투기 제거 ( 제거는 캔바스가)
                //아님! 위임을 안하려고 전역 context 를 생성한거니까!!!
                // newlec.enemies.splice(newlec.enemies.indexOf(enemy),1); //불꽃그려지기전에 제거되서 우선 주석처리
            }
        }


        

            //-------------------------------------------------------------
    //   이동을 위한 코드    
    // switch (this.dir) {
    //     case 1: //북쪽
    //         this.y -= 1;
    //         break;
    //     case 2: //동쪽
    //         this.x += 1;
    //         break;
    //     case 3: //남쪽
    //         this.y += 1;
    //         break;
    //     case 4: //서쪽
    //         this.x -= 1;
    //         break;
    // }
    // ----> 4개의 변수를 했으니 이제 이건 무의미함.
     //   이동을 위한 코드  
    // console.log(this.moveUp);
    // 이미지변환을 여기 넣으면 안되는게 아닌가 싶었는데? 그냥 이동에는 속도,방향이 포함되니까 ㄱㅊ
    if(this.moveUp) {
        this. iy = 0;
        this.y -= this.#speed;
    }
    if(this.moveDown) {
        this.iy = 2;
        this.y +=this.#speed;
    }
    if(this.moveLeft){
        this.x -=this.#speed;
    }
    if(this.moveRight){
    this.iy = 1;
        this.x +=this.#speed;
    }
    


        //벡터가 0이면 반환 - 서있는 모습
        if(!(this.moveLeft||this.moveRight||this.moveDown||this.moveUp||false)) //하나라도 눌린게 없고, VX가 0이라면 return해라
        if(this.vx == 0 && this.vy ==0) {
            this.ix = 1;
            return;
        }
    

        this.x += this.vx;
        this.y += this.vy;


        // 걸음을 걷는 효과
       
        this.walkDelay--;
        if(this.walkDelay ==0)
        {   // this.ix ==1 ? 1 : (this.ix == 2 ? 0 : 2);  <--- 처음에 멈춰있거나 움직이거나 둘 중 하나니까 1 : (this.ix == 2 ? 0 : 2); <- 1 이부분도 고려해줌
            this.ix =  this.ix == 2 ? 0 : 2;
            // this.ix = this.ix == 2 ? 0 : 2;
            //사진선택
            
            this.walkDelay = 10;
          
         
        }

      

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

    }


    
    

    move(dir) {
        this.dir = dir;
        switch (this.dir) { //this.dir로 하면 0으로 읽어옴
            //북쪽 남쪽은 로직이 같으니까(위,아래)
            case 1:
                this.moveUp = true;
                break;
            case 3:
                this.moveDown = true;
                break; //서쪽
            //동쪽
            case 2:
                this.moveRight = true;
                console.log("출력" + this.moveRight);
                break;
            case 4:
                this.moveLeft = true;
                break;

            
            
        }

        console.log(this.moveRight);
    };

    stop(dir) {
        this.dir = dir;
        switch (this.dir) {
            //북쪽 남쪽은 로직이 같으니까(위,아래)
            case 1:
                this.moveUp = false;
                break;
            case 3:
                this.moveDown = false;
                break; 
            case 2:
                this.moveRight = false;
                break;
            case 4:
                this.moveLeft = false;
                break;
        }
    }


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
