import Background from '../item/background.js';
// import Apple from '../item/apple.js';
import Fruits from '../item/fruits.js';
import newlec from '../../수업변형/newlec.js';

export default class GameCanvas {

  constructor() {

   
    newlec.x ++;
    console.log("두번쨰 x : " + newlec.x );

    this.dom = document.querySelector('.game-canvas');
    this.dom.focus();

    //캔바스에서 Context얻기
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext('2d');
    
    //객체
    this.bg = new Background();
    this.fruits = [];
    // this.fruit = new Fruits();
    // this.apple = new Apple();
    
    

    this.fruitmakeDelay = 30;
  }

  run() {

    this.update();
    this.draw();

    //run()을 계속 돌려야 하는데.
    window.setInterval(()=> {
      this.run()
    },60);
    
  }


  draw() {
    this.bg.draw(this.ctx);
    for(let fruit of this.fruits)
      fruit.draw(this.ctx);
    // this.apple.draw(this.ctx);
    

  }

  update() {
    // 진행되면서 과일이 추가되어야 하니까
    this.fruitmakeDelay --;
    if(this.fruitmakeDelay == 0) {
      let fruit = new Fruits();
        this.fruits.push(fruit);

      for(let fruit of this.fruits)
        fruit.update(this.ctx);
      // this.apple.update(this.ctx);
      this.fruitmakeDelay = Math.floor(Math.random()*20)+30;
      
    
  }
}

}

