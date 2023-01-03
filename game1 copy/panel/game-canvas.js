class GameCanvas {

    constructor() {

        this.dom = document.querySelector('.game-canvas'); //this.dom = canvas
        // console.log("이게뭔데" + this); 이것을 붙여줘야지 canvas 자동완성 한다.
        /** @type {CanvasRenderingContext2D} */
        var ctx = this
            .dom
            .getContext('2d');

        this.boy = new Boy(100, 100);

        this.dom.onclick = this
            .clickHandler
            .bind(this); //this.clickHandler() 이렇게하면 안됨 이건 호출임
    }

    run() {
        //60프레임으로 화면을 다시 그리는 코드
        this.update(); //지워야 하니까  - 또 여기 this는 누구야 GameCanvas?
        this.draw();
    }

    update() {};

    draw() {
        this.boy.draw(this);
    }

    //----- event handler --------------

    clickHandler() { //prototype이니까 var fu = new fu~ 이건 적합하지 않음
        console.log(this); //GameCanvas가 나와야 하는데, this가 나옴 -> so bind(GameCanvas)
        this.boy.move(2);

        //화면 지우기 ( boy1 은 유지하고 boy2만 지워야 함) - 화면을 화면을 지우는것은 배경으로 덮어버린다.
        this.boy.draw(this.ctx);
    }
}
