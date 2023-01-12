class Context {
//Private field '#enemies' must be declared in an enclosing class
#enemies;

    constructor() {
        this.#enemies = null; //private를 해주면 이용하기가 귀찮아서 고민되긴 함
    }

    get enemies() {
        return this.#enemies;
    }

    set enemies(value) {
        this.#enemies = value; //외부에서 set할때 xxx.enemies = 대입값  <- = 로 하기!
    }



}


export default new Context(); //객체 싱글톤