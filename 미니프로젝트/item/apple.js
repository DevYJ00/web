export default class Apple {

  constructor() {
    
    
    this.x = 30;
    this.y = 50;

    //이미지 로드
    this.img = document.querySelector('#ap-w');
    console.log(this.img)
  }

  draw() {
    this.img.drawImage(this.img,this.x,this.y);
  }

}