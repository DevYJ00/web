export default class ConfirmDlg{
    constructor(){
        this.x = 100;
        this.y = 100;
        this.width = 400;
        this.height = 200;




        this.isVisible = false;

        this.onContinue = false;
        this.onEnd = false;
        this.onclick = null; //gameCanvas 에서 생성하면서 자동할당
        
        this.btnYes = {
            x : 70,
            y : 100,
            width : 100,
            height : 50,
            label : 'YES'
           
         };

        this.btnNo = {
            x : 230,
            y : 100,
            width : 100,
            height : 50,
            label : 'NO'
            
        };

        //콜백
    }

    //윈도우로써 사용자 입력 이벤트를 수신하기 위한 함수
    notifyClick(x,y) {
        //자식이 있다면 자식에게도 이 이벤트를 통지해야 한다. - 디자인패턴에 '커맨드패턴'에 해당(그냥 그렇구나~)

        //내가 클릭된건가? - 이건 통(dlg) 창 자체!
        if((this.x < x  &&  x < this.x + this.width) 
            && (this.y < y && y < this.y + this.height)) {
            console.log('앗 나야?!');
        
        //dlg가 클릭된거면, 이제 내 자식들이 클린된건지 확인! 후 알려줘야 함

        // this.onclick 위임 변수가 있다면 호출 <--- 누가 위임?
          if(this.onclick) 
            this.onclick(3); //1을 받으면 DLG, 2를 받으면 OK버튼 3은 NO버튼
            console.log(this.onclick(3));
        
    }
        //------- 자식에 대한 영역을 찾아서 하는건 알아서 해라. 
        //수업은 3(더 이상 진행 안한다) 으로 가정하고 진행 - 화면 전환 
            
    }

    show(){
        this.isVisible = true;
    }

    update() {

    }
   

    draw(ctx){
        if(!this.isVisible){

            return;
        }

        let {x, y} = this;
        
        // 흰색 배경에
        ctx.fillStyle = '#FFF5';
        // ctx.fillRect(x,y,this.width, this.height); <--- 여기서 에러가 나는데!!!

        // 검은색 테두리
        ctx.fillStyle = '#000';
        ctx.strokeRect(x, y,this.width, this.height);

        ctx.fillStyle = 'black';
        ctx.font = 'bold 48px serif';
        ctx.fillText('Continue?', this.width/2, y+70);

        let btns = [this.btnYes, this.btnNo];

        for(let btn of btns) {
            let { x, y, width:w, height:h, label} = btn; //뽀개기

            ctx.fillStyle = 'gray';
            ctx.fillRect = (this.x + x , this.y + y, w, h);
            ctx.fillStyle = 'black';
            ctx.strokeRect (this.x+x, this.y+y, w,h);
            ctx.font ='bold 30px serif';
            ctx.fillText( label, this.x+x+20 , this.y+135 );
            
        }
    }

}
    
    // ctx.fillText(label, this.x + this.width/2 + 20, this.y+135) 

        // ctx.fillStyle = 'gray';
        // ctx.fillRect(x+70, y+100, 100, 50);
        // ctx.fillStyle = 'black';
        // ctx.strokeRect(x+70, y+100, 100, 50);
        // ctx.font = 'bold 30px serif'
        // ctx.fillText('YES', this.width/2-10, y+135); // y+135
        
        // ctx.fillStyle = 'gray';
        // ctx.fillRect(x+230, y+100, 100, 50);
        // ctx.fillStyle = 'black';
        // ctx.strokeRect(x+230, y+100, 100, 50);        
        // ctx.font = 'bold 30px serif'
        // ctx.fillText('NO', this.width/2+160, y+135);



    
