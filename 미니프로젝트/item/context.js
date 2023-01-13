//공유공간 (과일객체 올려놓기)
class Context {
//클래스처럼 변수 선언은 해주어야 함
// #fruits

#watermelons
    constructor() {
        // this.#fruits = null;
      

        this.#watermelons = null;


    }

    get watermelons() {
        return this.#watermelons;
    }

    set watermelons(value) {
        this.#watermelons = value;
    }



    // get fruits() {

    //     return this.#fruits;
    // }

    // set fruits(value) {
    //     this.#fruits = value;
    // }


}

export default new Context();