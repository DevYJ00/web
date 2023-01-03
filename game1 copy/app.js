//윈도우에 html이 다 로드된 후 js 실행되도록 
//element.addEventListener("이벤트명",함수명,옵션)
window.addEventListener("load",function() {

    var gameCanvas = new GameCanvas();
    gameCanvas.run();
});