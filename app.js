//윈도우에 html이 다 로드된 후 js 실행되도록 
//element.addEventListener("이벤트명",함수명,옵션)
window.addEventListener("load",function() {

    //우선 캔바스
    var canvas = this.window.document.querySelector('.game-canvas');

    // 이것을 붙여줘야지 canvas 자동완성 한다.
    /** @type {CanvasRenderingContext2D} */ 
    var ctx = canvas.getContext('2d');

    //이벤트! canvas에 걸어줌
    canvas.onclick = function() {
        boy1.draw(ctx);
        boy1.move(1);
        
    }




    //캐릭터 잘라올 때 사용하는 함수 
    //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    //drawImage(image, 시작x, 시작y, 잘라낼그림w, 잘라낼그림h,배치x, 배치y,배치그림w,배치그림h)

    //캐릭터 객체화 - 생성자 함수 이용 (왜 객체 선언 안하고? 객체 선언으로 하면 호이스팅 문제때문에 undefined 하지만, 함수 선언으로하면 함수까지 생성되니까 )
    function Boy(x,y) { //  기본은 정면보는 
        //x,y : 출력 위치 값 안주면 (200,100) 위치
        this.x = x || 200;
        this.y = y || 100;
        this.ix = 1; this.iy = 2; //정면보는게 기본

        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.ix * this.sw;
        this.sy = this.iy * this.sh;
    }

    //공통으로 갖는 함수
    Boy.prototype = {
        draw : function(ctx) {
            var img = new Image();
            img.src = './image/boy.png';
            img.onload = function() {
                ctx.drawImage(img,this.sx, this.sy, this.sw, this.sh,   
                    this.x, this.y,this.sw, this.sh);            //이미지가 로드되면 띄워야겠지
            }.bind(this); //밖 this는 boy니까 이게 더 보기 좋음 bind(boy1) 보다!
            
        },

        move : function(dir) {
            switch(dir) {
                case 1 : //북쪽
                 this.y -= 10;
                 break;
                case 2 : //동쪽
                 this.x += 10;
                 break;
                case 3 : //남쪽
                  this.y +=10;
                  break;
                case 4 : //서쪽
                  this.x -= 10;
                  break;
              }
        },

        // clear : function() {
        //     ctx.clear;
        }

    
    var boy1 = new Boy();
    boy1.draw(ctx);



});