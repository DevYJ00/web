import Background from '../item/background.js';
import Apple from '../item/apple.js';

export default class GameCanvas {

  constructor() {
    this.dom = document.querySelector('.game-canvas');
    this.dom.focus();

    //캔바스에서 Context얻기
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext('2d');
    
    //객체
    this.bg = new Background();
    this.apple = new Apple();
  }

  run() {

    this.draw();
    this.update();

    //run()을 계속 돌려야 하는데.
    window.setInterval(()=> {
      this.run()
    },10);
    
  }


  draw() {
    // this.bg.draw(this.ctx);
    this.apple.draw(this.ctx);
  }

  update() {
    this.apple.update();
    
  }
}

