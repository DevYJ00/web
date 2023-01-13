import Background from '../item/background.js';
// import Apple from '../item/apple.js';
import Fruits from '../item/fruits.js';
import context from '../item/context.js';
import Watermelon from '../item/watermelon.js';

export default class GameCanvas {

  constructor() {


    this.dom = document.querySelector('.game-canvas');
    this.dom.focus();

    //캔바스에서 Context얻기
    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext('2d');
    
    //객체
    this.bg = new Background();
    this.watermelon = new Watermelon();
    context.watermelons = this.watermelon;
    // this.watermelons = []; //전역공간에 올릴려면!

    
    this.fruitmakeDelay = 30;

    //클릭됐다고 notify
    this.dom.onclick = this.clickHandler.bind(this);
      
    }


  

  run() {

    this.update();
    this.draw();

    //run()을 계속 돌려야 하는데.
    window.setInterval(()=> {
      this.run()
    },17);

    // 배열은 테스트 후에
    // this.watermelon = new Watermelon();
    // this.watermelons.push(this.watermelon);
    // context.watermelons = this.watermelons;
    



    
  }


  draw() {
    this.bg.draw(this.ctx);
    
    if(context.watermelons != null)
      this.watermelon.draw(this.ctx);
    

  }

  update() {

    this.watermelon.update();
    // 진행되면서 과일이 추가되어야 하니까
    

  }

  //eventHandler
  clickHandler(e) {
    console.log("클릭감지")
    this.watermelon.notifyClick(e.x, e.y);
  }



}


    //-----------------------------------과일 개별 클래스로
    // this.fruitmakeDelay --;
    // if(this.fruitmakeDelay == 0) {
    //   let fruit = new Fruits();
    //   //이벤트  클릭이 발생하면 과일한테 좌표 넘겨주기!
    //   this.dom.addEventListener('click', e => {
    //   console.log(fruit.clickX = e.screenX);
    //   // Fruits.this.clickX = e.screenX;
    //   // Fruits.this.clickY = e.screenY;
    // })



    //     this.fruits.push(fruit);
    //     // console.log(this.isClick);

      


    //   for(let fruit of this.fruits)
    //     fruit.update(this.ctx);
    //   // this.apple.update(this.ctx);
    //   this.fruitmakeDelay = Math.floor(Math.random()*30)+3000;
      
      // console.log(context.fruits); // 잘 담겼고
  


//---------event handler



