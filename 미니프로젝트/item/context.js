//공유공간 (과일객체 올려놓기)
class Context {
//클래스처럼 변수 선언은 해주어야 함
#fruits
#clickX
    constructor() {
        this.#fruits = null;
        this.#clickX= null;

        


    }

    get fruits() {

        return this.#fruits;
    }

    set fruits(value) {
        this.#fruits = value;
    }

    set clickX(value) {
        this.#clickX = value;
    }

    get clickX() {
        return this.#clickX;
    }

}

export default new Context();