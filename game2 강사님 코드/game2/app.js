import GameCanvas from './panel/game-canvas.js';
import RankCanvas from './panel/rank-canvas.js';

window.addEventListener("load", function(){

    const gameCanvas = new GameCanvas();

    //창 전환
    gameCanvas.ongameOver = (e) => {
        gameCanvas.dom.classList.add("d-none");
        rankCanvas.dom.classList.remove("d-none");
    }


    gameCanvas.run();

    const rankCanvas = new RankCanvas();
    rankCanvas.run(); 

});