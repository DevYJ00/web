import GameCanvas from './panel/game-canvas.js';
import newlec from './newlec.js';

//html이 다 로드된 후 js실행
window.addEventListener("load", function(){

  const gameCanvas = new GameCanvas();
  gameCanvas.run();

  // newlec.x++;
  // console.log("x : " + newlec.x);
});
