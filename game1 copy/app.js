//윈도우에 html이 다 로드된 후 js 실행되도록 
//element.addEventListener("이벤트명",함수명,옵션)
window.addEventListener("load",function() {

    const gameCanvas = new GameCanvas(); //바뀔 일이 없기 때문에 const로! - GameCanvas를 만들어서 gameCanvas라는 이름으로 사용할거야.
    gameCanvas.run(); 
   


});