class GameCanvas{
    constructor(){
        this.dom = document.querySelector(".game-canvas");
        // 틀로 쓸 수 있지 않아
        /** @type {CanvasRenderingContext2D} */ 
        this.ctx = this.dom.getContext("2d");
        this.boy = new Boy(100,100);

        // 게임 상태변수, 게임오버되게 해주는
        this.gameover = false;
        // 게임일시정지 변수
        this.pause = false;
    
        this.dom.onclick = this.clickHandler.bind(this); // 보따리에 싸줌
    }
    run(){ // 주기적으로 업데이트와 드로우 일어남
        if(this.pause)
            return; // 캐릭터 상태는 그대로 보존된다고함

        // 초당 60프레임으로 화면을 다시 그리는 코드
        this.update();
        this.draw();

        console.log("time start");
        // window.setTimeout(this.run.bind(this), 1000) // 1000이 1초
        // 셋인터벌, - 매일 알람, 그 시간만 되면
        // setTimeout 사용할거임 - 일회성알람
        // window.setTimeout(function(){ // 호출하는 주체가 누구인지 봐야함
        //     this.run();
        // }.bind(this), 1000); // 1000이 1초
        window.setTimeout(()=>{ // 자기의 this가 없으니 여기에서 this는 run이다.
                                // 자기만의 영역이 없다는 뜻도됨. 자기 영역 필요 없을 때 사용 가능
            this.run();
        }, 17);
    }
    update(){ // 잘게 쪼개서 가는 애들은 update가 필요해, 단위렉터의 범위를 계쏙~
                // 업데이트는 점진적인 변화를 줄 때 사용하는 것
        this.boy.update();
        // this.boy.move(2); // 상태가 바뀌고

    }
    draw(){
        this.boy.draw(this.ctx); // 다시 그리고
    }
    pause(){
        this.pause = true;
    }
    // ---event handlers-------------------- // 사용자 입력
    clickHandler(e){ // GameCanvas의 것이어야함 // event의 줄임 e
        this.pause = true;
        // console.log(this);
        // this.boy.move(2); // 방향코드, 시계방향 1~4
        this.boy.moveTo(e.x, e.y); // 이벤트가 발생한 x,y 좌표를 알려주는 것
        // 파라라락 다음에 바로 적용됨, 적용 바로 하면 재미없어
        // 원치 않은 경우 사용하는게 업데이트, 나눠서 가게
    
        // this.boy.draw(this.ctx);
    }
}

// 캔버스는 사용자 전달하는 역할
// 움직임이 한 번에 일어나는게 아니라 점진적으로 일어난다.

// 클릭은 사용자가 한 이벤트
/*
이벤트가 발생하면 무슨 이벤트인지 궁금해해야함
구체적인 사건을 알고싶어함
불이났대~
언제 어디서 어떻게


클릭했으면 어디를 클릭했는지
함수의 매개변수로 가져옴
*/

// 업데이트 증가 그림그리기