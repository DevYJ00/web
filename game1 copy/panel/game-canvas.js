class GameCanvas {

    constructor() {

        this.dom = document.querySelector('.game-canvas'); //this.dom = canvas
        // console.log("이게뭔데" + this); 이것을 붙여줘야지 canvas 자동완성 한다.
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext('2d');

        this.boy = new Boy(100, 100);// -- 이거 draw 메서드 오류나서 주석처리해놓음

        //게임 상태변수
        this.gameover = false; // this = GameCanvas 꺼
        //애니메이션을 멈추려면 일시정지 하는 기능이 필요
        //프레임이 변경되면 기존 프레임은 멈춰있어야 함(상태는 유지하고), 다시 기존 프레임 오면 있어야하니까
        //즉, 게임오버되서 상태초기화되는것도 일시정지시키는것도 필요.
        //일시정지는 사용자니까 밖에서 필요
        this.pause = false;



        this.dom.onclick = this
            .clickHandler
            .bind(this); //this.clickHandler() 이렇게하면 안됨 이건 호출임
    }

    run() {


        if(this.pause) //this.pause = true면 게임 멈춤(게임 상태는 유지)
            return ; 


        //60프레임으로 화면을 다시 그리는 코드
        this.update(); //지워야 하니까  - 또 여기 this는 누구야 GameCanvas?
        this.draw();





        console.log("timer start")
        //10초 후 
        // window.setTimeout(this.run.bind(this), 1000) // 1000 = 1초
        window.setTimeout(()=>{
            this.run();
        },17)
    }

    update() {
        this.boy.update();
        
    };

    draw() { // -- 에러나서 잠시 주석 처리
        this.boy.draw(this.ctx);
    }


    pause() {
        this.pause = true;
    }

    //----- event handler --------------

    clickHandler(e) { //prototype이니까 var fu = new fu~ 이건 적합하지 않음
        
        
        
        console.log(this); //GameCanvas가 나와야 하는데, this가 나옴 -> so bind(GameCanvas)
        // this.boy.move(2);
        this.boy.moveTo(e.x,e.y);

        // 화면 지우기 ( boy1 은 유지하고 boy2만 지워야 함) - 화면을 화면을 지우는것은 배경으로 덮어버린다.
        this.boy.draw(this.ctx);
    }
}
