window.addEventListener("load", function(){

    const gameCanvas = new GameCanvas();
    gameCanvas.run(); // 심박동을 갖게함. 무한히, 무한루프가 들어감
    // ui 쓰레드를 잡아먹지 않으면서 가능하게
    // f12 <-> alt + f12


    // gameCanvas.pause(); // 상태변수 바꾸는 녀석이 필요해
    
});

/*
let
지역화 가능함
앞으로 var를 쓰지 않는다.
쓸거면 알고 써야한다. 의도적으로

상수형변수 const
*/