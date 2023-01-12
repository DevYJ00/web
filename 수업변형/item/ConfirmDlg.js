export default class ConfirmDlg {

    constructor(){
        this.x = 100;
        this.y = 100;
        this.width = 400;
        this.height = 200;

        this.isVisible = false;

        //두 개의 위임 함수 필요! 
        this.onCountinue = false;
        this.onEnd = false;

    }

    show() {
        //화면에 보이도록
        this.isVisible = true;
    }


    update() {

    }

    


    draw(ctx) {
        if(!this.isVisible)
            return;

            let {x,y} = this; // this.x 이게 어떻게 이렇게 가능???

        //흰색 배경에
        ctx.fillStyle = '#FFF'; //흰색
        ctx.fillRect(x,y,this.width,this.height); //채우기(도화지)

        //검은색 테투리
        ctx.fillStyle = '#000';
        ctx.strokeRect(x,y,this.width,this.height); //stroke : 경계선

        ctx.fillStyle = '#FFF7';
        ctx.fillRect(x, y, this.width, this.height);

        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, this.width, this.height);

        ctx.fillStyle = 'black'
        ctx.font = 'bold 48px serif'
        ctx.fillText('Continue?', this.width/2, y+70);

        ctx.fillStyle = 'gray';
        ctx.fillRect(x+70, y+100, 100, 50);
        ctx.fillStyle = 'black';
        ctx.strokeRect(x+70, y+100, 100, 50);
        ctx.fillStyle = 'gray';
        ctx.fillRect(x+230, y+100, 100, 50);
        ctx.fillStyle = 'black';
        ctx.strokeRect(x+230, y+100, 100, 50);

        ctx.font = 'bold 30px serif'
        ctx.fillText('YES', this.width/2-10, y+135);
        ctx.font = 'bold 30px serif'
        ctx.fillText('NO', this.width/2+160, y+135);



    }


}


