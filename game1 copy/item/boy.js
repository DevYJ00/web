class Boy { //  기본은 정면보는

    constructor(x, y) {
        //x,y : 출력 위치 값 안주면 (200,100) 위치 - 캐릭터 위치/ 캐릭터 생성과 캐릭터 그리는건 별도!!!
        this.x = x || 200;
        this.y = y || 100;

        this.vx = 0; //벡터x
        this.vy = 0; //벡터y

        this.dx = 0; //목적지x
        this.dy = 0; //목적지y

        //캐릭터 9개중 인덱스
        this.ix = 1;
        this.iy = 2; //정면보는게 기본

        //이 부분은 손대지 않음.
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.ix * this.sw;
        this.sy = this.iy * this.sh;
    }

    draw(ctx) {
        var img = new Image();
        img.src = './image/boy.png';
        img.onload = function () {
            ctx.drawImage(img, this.sx, this.sy, this.sw, this.sh,this.x, this.y, this.sw, this.sh);  //이미지가 로드되면 띄워야겠지
        }.bind(this); //밖 this는 boy니까 이게 더 보기 좋음 bind(boy1) 보다!

    };

    update() {

        //처음에 안움직일 땐, index=1사진 출력 - 사진도 상태가 변화하는거니까 update
        
        // if(vx != 0) {
        //     // 목적지에 도착하는 것도 고려(vx 값은 계속 가니까 dx=0  목적지 도착하면 ix=1로 바꿔줌)
        //     this.ix = this.dx == 0 ? this.ix = 1 : (this.ix == 2 ? 0 : 2); 
        // } else
        //     this.ix = 1;



 
        //보이변화상태고려!

        // 목적지에 도착하면 벡터값 0 
        if((this.dx-1< this.x && this.x <this.dx+1) && (this.dy-1 < this.y && this.y <this.dy+1)) {
            this.vx = 0;
            this.vy = 0;
        }

        this.x += this.vx;
        this.y += this.vy;

    }

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
