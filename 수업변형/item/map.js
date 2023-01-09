export default class Background {

    constructor(x,y) {

        this.x = 0;
        this.y = 0;


        //이미지가 로드되야겠지 - 배경객체에 담아
        this.img = document.querySelector('#bg');
     
    
    }

    draw(ctx) {
        // 이미지가 로드되면 출력해라
        ctx.drawImage(this.img, this.x, this.y);
   
    }

    scroll(d){//인자 d를 넣어서 동서남북 4방향, 인자 안 넣으면 메서드 4개 생성해야함

    }


    update() {

    }
}




   

 


