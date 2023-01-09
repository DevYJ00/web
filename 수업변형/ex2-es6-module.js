import aaa,{test1,test2,NUMBER,Exam} from './module1.js';
import kkk, {test1 as test3} from './module2.js';
aaa();

test1();

test2();


console.log(NUMBER);


test3(); //module2 test1

//클래스를 import 한 걸 사용해보자
let exam1 = new Exam();
console.log(exam1);

// 객체 import -  객체는 default로만 가능
import exam5,{test1,test2,NUMBER,Exam} from './module1.js';

console.log(exam5);