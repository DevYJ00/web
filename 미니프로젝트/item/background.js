
export default class Background {

  constructor() {
    this.x = 0
    this.y = 0

    //이미지 로드
    this.img = document.querySelector('#bg');
    console.log(this.img)
  }

  draw(ctx) {
    ctx.drawImage(this.img,this.x, this.y);
  }

}