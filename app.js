//윈도우에 html이 다 로드된 후 js 실행되도록 
//element.addEventListener("이벤트명",함수명,옵션)
window.addEventListener("load",function() {

    //우선 캔바스
    var canvas = this.window.document.querySelector('.game-canvas');

    // 이것을 붙여줘야지 canvas 자동완성 한다.
    /** @type {CanvasRenderingContext2D} */ 
    var ctx = canvas.getContext('2d');

    //캐릭터 객체화 - 생성자 함수 이용 (왜 객체 선언 안하고? 객체 선언으로 하면 호이스팅 문제때문에 undefined 하지만, 함수 선언으로하면 함수까지 생성되니까 )
    function Boy() {
        
    }




})