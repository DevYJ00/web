//공유공간
class Context {
//클래스처럼 변수 선언은 해주어야 함
#fruits
    constructor() {
        this.#fruits = null;

        


    }

    get fruits() {

        return this.#fruits;
    }

    set fruits(fruit) {
        this.#fruits = fruit;
    }

}

export default new Context();