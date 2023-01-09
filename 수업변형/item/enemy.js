export default class Enemy {

    constructor(x,y) {

        this.x = x || 450;
        this.y = y || 350;

        this.img = document.querySelector('#enemy');
        // console.log(this.img);

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }


    run() {

    }


}