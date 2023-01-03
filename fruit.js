//윈도우 로드시 그림
window.addEventListener("load",function() {

    var canvas = this.window.document.querySelector(".fruit-canvas");

    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext('2d');

    // // 이미지 테스트
    // var img = new Image();
    // img.src = "./image/apple-w.png";

    // img.addEventListener("load",function(){ //이미지가 로드되고 나면 출력해라
    //     ctx.drawImage(img,0,500);
        
    // })
    //-----------------------------------------------------------------------------------보류
    /*
    //버블링 개념
    canvas.onclick = function() {
        apple1.move(1);
        apple1.draw(ctx);

    }
    // 시간간격을 가지고  onclick이 발생했으면 좋겠는데!
    function test() {
        setTimeout(function() {
            apple1.move(1);
            apple1.draw(ctx)
        
        },50)
    }

    for(var i =0; i<50; i++)
    test();
    */
    //-----------------------------------------------------------------------------------보류


    //과일 객체 생성
    function Apple(x,y) {
        this.x = x || 0;
        this.y = y || 500;
        //속도변수
    }

    //객체마다 갖는 공통 속성 - 출력, 이동
    Apple.prototype = {
        draw : function(ctx){
            var img = new Image();
            img.src = "./image/apple-w.png";
            img.onload = function() { //이미지가 로드되고 나면 그려져라!
                ctx.drawImage(img,this.x, this.y); //여기 this가 img인데 우린 apple좌표가 필요한거니까 bind
           
            }.bind(this); //외부에서 this는 Apple이니까 bind 를 this로 잡아주는게 깔끔함
            console.log(this); //Apple = this
        },

        move : function(dir) {
            switch(dir) { 
                case 1 :  //북
                 this.y -= 10;
                 break;
                case 2 : //동
                this.x +=10;
                break;
                case 3: //남
                this.y += 10;
                break;
                case 4://서
                this.x -= 10;
                break;
            }
        },

        


    }


var apple1 = new Apple();
apple1.draw(ctx);
// ctx.bezierCurveTo(0,500,300,500,400,500);



})