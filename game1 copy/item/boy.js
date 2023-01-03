function Boy(x, y) { //  기본은 정면보는
    //x,y : 출력 위치 값 안주면 (200,100) 위치
    this.x = x || 200;
    this.y = y || 100;
    this.ix = 1;
    this.iy = 2; //정면보는게 기본

    //이 부분은 손대지 않음.
    this.sw = 106;
    this.sh = 148.25;
    this.sx = this.ix * this.sw;
    this.sy = this.iy * this.sh;
}

//공통으로 갖는 함수
Boy.prototype = {
    draw: function (ctx) {
        var img = new Image();
        img.src = './image/boy.png';
        img.onload = function () {
            ctx.drawImage(img,this.sx, this.sy, this.sw, this.sh,   
                this.x, this.y,this.sw, this.sh);  //이미지가 로드되면 띄워야겠지
        }.bind(this); //밖 this는 boy니까 이게 더 보기 좋음 bind(boy1) 보다!

    },

    move: function (dir) {
        switch (dir) {
            case 1: //북쪽
                this.y -= 10;
                break;
            case 2: //동쪽
                this.x += 10;
                break;
            case 3: //남쪽
                this.y += 10;
                break;
            case 4: //서쪽
                this.x -= 10;
                break;
        }
    },

    // clear : function() {     ctx.clear;
}