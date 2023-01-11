//boy, bg, enemy사용하니까 import 필요
import Boy from '../item/boy.js';
import Background from '../item/map.js';
import Enemy from '../item/enemy.js';
import newlec from '../newlec.js';


export default class GameCanvas {

    constructor() {

     

        this.dom = document.querySelector('.game-canvas'); //this.dom = canvas
        this.dom.focus(); //처음부터 활성화되도록
        // console.log("이게뭔데" + this); 이것을 붙여줘야지 canvas 자동완성 한다.
        /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext('2d');
        this.dom.width = 700;

        this.bg = new Background();
        this.boy = new Boy(100, 200);// -- 이거 draw 메서드 오류나서 주석처리해놓음
        // this.boy.speed++; 
        // console.log(this.boy.speed); //NaN
        //# 붙은거라 읽어올 수가 없음
        // this.boy.setSpeed(this.boy.getSpeed()+1);
        // console.log("speed : " + this.boy.getSpeed());
        //boy 스피드 설정 , boy 모듈에서 private설정해놔서 다이렉트로 접근 불가
        //getSpeed(), setSpeed() 라고 설정해놓으면 외부에서 쓸 때 너무나도 대놓고 드러나니까 접근자 프로퍼티를 이용
        // console.log(this.boy.speed = 5);
        // console.log(this.boy.speed) //  set  이용한건데 set느낌이 없음


        //적
        // this.enemy = new Enemy();
        // this.enemies = [
        //     new Enemy(10,0),new Enemy(30,0),new Enemy(50,0),new Enemy(100,0),new Enemy(130,0),
        //     new Enemy(10,20),new Enemy(50,20),new Enemy(130,45),new Enemy(50,30),new Enemy(70,90)
        // ]; - composition 방법
        this.enemies = []; //필요에 따라 생성해서 담음 - aggregation.
        this.enemyAppearDelay = Math.ceil(Math.random()*30)+30;

        //전투기를 전역공간같은 nelec(context) 에 저장
        newlec.enemies = this.enemies; //newlect은 아무나 접근하고 사용할 수 있는공간. 공유로 만듬
        console.log(newlec.enemies.length); //get

        // //콜백함수 부여
        // for(let enemy of this.enemies) 
        // enemy.onOutOfScreen = (en) => { //en은 현재 밖으로 벗어난 전투기
        //     this.enemies.splice(this.enemies.indexOf(en),1); // <- 배열에서 어떻게 지우지 splice? - indexOf() 로 객체도 찾을 수 있음
        // }; // 화살표함수 안쓴 이유(this안쓰려고, 호출은 enemy가 하지만 수행은 게임캔바스가)    
        


        //게임 상태변수
        this.gameover = false; // this = GameCanvas 꺼
        //애니메이션을 멈추려면 일시정지 하는 기능이 필요
        //프레임이 변경되면 기존 프레임은 멈춰있어야 함(상태는 유지하고), 다시 기존 프레임 오면 있어야하니까
        //즉, 게임오버되서 상태초기화되는것도 일시정지시키는것도 필요.
        //일시정지는 사용자니까 밖에서 필요
        this.pause = false;


        //이벤트
        this.dom.onclick = this
            .clickHandler
            .bind(this); //this.clickHandler() 이렇게하면 안됨 이건 호출임
            
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);


        
    }

    run() {


        if(this.pause) //this.pause = true면 게임 멈춤(게임 상태는 유지) return되면 함수 호출한곳으로 되돌아가고 (app.js)
            return ; 


        //60프레임으로 화면을 다시 그리는 코드
        this.update(); //지워야 하니까  - 또 여기 this는 누구야 GameCanvas ㅇㅇ 맞음
        this.draw();





        // console.log("timer start")
        //10초 후 
        // window.setTimeout(this.run.bind(this), 1000) // 1000 = 1초
        window.setTimeout(()=>{
            this.run(); 
        },17)

        // window.setTimeout(run(),17) <- 이러면 window의 run이 호출되니까 bind해줘야하는데 화살표함수로하면 편리

    }

    update() {
        
        this.boy.update(); //this.boy <- 객체에 담겨있는 boy -> 그러면  boy의 update() 함수가 호출되는거지 -> boy파일로 가고
       
        for(let enemy of this.enemies)
            enemy.update();
        
        this.enemyAppearDelay--; //랜덤하게 0.5초~1초 사이에 떨어지게. 
        if(this.enemyAppearDelay == 0) {
            //숫자 무슨일.. 
            let max = this.dom.width+50
            let min = 50;
            let x = Math.random() * (max - min) -50; // -50~this.dom.width + 50;
            let y = -10; // 0으로 걸었는데 왜 처음에 0부터 안떨어지지?했는데 delay때문에.
            
            //1.방법1
            // this.enemies.push(new Enemy(x,y)); // 배열에 push로 담을 수 있음
            //배열에 onOutOfScreen 부여해야하는데,,
            
            // //콜백함수 부여
            // for(let enemy of this.enemies) 
            // enemy.onOutOfScreen = (en) => { //en은 현재 밖으로 벗어난 전투기
            //     this.enemies.splice(this.enemies.indexOf(en),1); // <- 배열에서 어떻게 지우지 splice? - indexOf() 로 객체도 찾을 수 있음
            // }; // 화살표함수 안쓴 이유(this안쓰려고, 호출은 enemy가 하지만 수행은 게임캔바스가)    
          
            let enemy = new Enemy(x,y);
            enemy.onOutOfScreen = this.enemyOnOutOfScreenHandler.bind(this);
            this.enemies.push(enemy);

            this.enemyAppearDelay = Math.floor(Math.random()*(30))+30; //초기화  --- 이게 0.5초~1초 맞나?
            // console.log(this.enemyAppearDelay);
            }
            
            
        }
         
        enemyOnOutOfScreenHandler(en) {
             this.enemies.splice(this.enemies.indexOf(en),1); //정의부분에 bind하면 안되나했지만 정의부분에는 bind가 불가능!
        }

    draw() { // -- 에러나서 잠시 주석 처리
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx); // this.boy <- 객체에 담겨있는 boy -> boy의 draw( ) 함수를 호출 , 매개변수로 게임캔바스의ctx를 넘겨줌, 만약 this안붙이고 ctx넘기면? boy에는 ctx가 없으니까 에러남
        //Uncaught ReferenceError: ctx is not defined at GameCanvas.draw (game-canvas.js:56:23)  at GameCanvas.run (game-canvas.js:36:14) at app.js:6:16
        for(let enemy of this.enemies)
            enemy.draw(this.ctx);
        
    }


    pause() {
        this.pause = true;
    }

    //----- event handler --------------

    clickHandler(e) { //prototype이니까 var fu = new fu~ 이건 적합하지 않음
        
        
        
        console.log(`마우스클릭`); //GameCanvas가 나와야 하는데, this가 나옴 -> so bind(GameCanvas)
        // this.boy.move(2);
        this.boy.moveTo(e.x,e.y);

        // 화면 지우기 ( boy1 은 유지하고 boy2만 지워야 함) - 화면을 화면을 지우는것은 배경으로 덮어버린다.
        this.boy.draw(this.ctx);
    }

    keyDownHandler(e) {
      
        // console.log(e.key);
        switch (e.key) {
            case 'ArrowUp': //북쪽
                this.boy.move(1);
                break;
            case 'ArrowRight': //동쪽
                this.boy.move(2);
                break;
            case 'ArrowDown': //남쪽
                this.boy.move(3);
                break;
            case 'ArrowLeft': //서쪽
                this.boy.move(4);
                break;
        }


        
    }


    keyUpHandler(e) {
        //키보드 뗏을때 멈추도록. - move(0)으로 만들면 됨
        // this.boy.move(0); //0 하면 더해질값 없어서 멈춤 - 멈추긴 멈추지만 옳치 않음
        //하지만, 4개의 방향을 개별로 안하고 하나로 해서 뭔가 움직임이 부자연스럽다.
        //움직임을 4개로 받았다면 멈추는것도 그렇게 해야 함.
        //그리고 메서드명도 move일리가 없음. 어떤 방향으로 가는걸 멈춰라.


        switch (e.key) {
            case 'ArrowUp': //북쪽
                this.boy.stop(1);
                break;
            case 'ArrowRight': //동쪽
                this.boy.stop(2);
                break;
            case 'ArrowDown': //남쪽
                this.boy.stop(3);
                break;
            case 'ArrowLeft': //서쪽
                this.boy.stop(4);
                break;
        }
    }

}
// export default GameCanvas;