class Boy { //  기본은 정면보는

    constructor(x, y) {
        //x,y : 출력 위치 값 안주면 (200,100) 위치
        this.x = x || 200;
        this.y = y || 100;

        this.vx = 0; //벡터x
        this.vy = 0; //벡터y

        this.dx = 0; //목적지x
        this.dy = 0; //목적지y









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
