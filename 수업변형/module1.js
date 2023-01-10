// export default function test(){
//     console.log("module1 test");
// }

// export function test1() {
//     console.log("module1 test1111");
    
// }

// export function test2() {
//     console.log("module1 test222");
// }


//-----------------------------------
// 함수명에 안붙이고도 내보내기 가능
function test1() {
    console.log("module1 test1111");
    
}

function test2() {
    console.log("module1 test222");
}

//상수
export const NUMBER = 1;



export {test1, test2}; //이렇게 묶어서 보내는건 함수만 가능한 듯

export class Exam {
    constructor() {
        this.kor = 2;
        this.eng = 3;
        this.math = 4;
    }
}

//객체 노출은 default로만 가능 -  아님
export default new Exam();

//선언하고 쓰면 객체노출 default아닌거로 노출 가능
