// let kor = 20;
// let eng = 30;

// let obj = {kor, eng, total(){
//     return this.kor + this.eng; // this = obj
// }};

// function print(exam) {
//     this.kor = this.kor; // print객체는 kor 속성 갖게됨
//     this.eng = exam.eng;
//     this.total = exam.total; 

//     console.log("kor " + kor); // this.kor 로 this = print
//     console.log("eng " + eng);
//     console.log("total :" + total()) //this.total()로 this가 print
//     // this.total() = this.kor + this.eng 하게 되는데, print에 kor, eng값이 있으니까 50출력 
// }

// print(obj);

//------------------------------------------------

// let kor = 20;
// let eng = 30;

// let obj = {kor, eng, total(){
//     return kor + eng; //this.kor + this.kor
// }};

// function print(exam) {
//     this.kor = exam.kor; // print객체는 kor 속성 갖게됨
//     this.eng = exam.eng;
//     let total = exam.total; // 지역변수랑 this가 있으면 지역변수가 우선시됨
//     this.total = 0;
//     console.log("kor " + kor); // this.kor 로 this = print
//     console.log("eng " + eng);
//     console.log("total " + total()); //이건 print가 this print의 kor, eng 있으니까 50 출력
// }

// print(obj);
//------------------------------------------------

// let kor = 20;
// let eng = 30;

// let obj = {kor, eng, total(){
//     return this.kor + this.eng; // this = obj
// }};

// function print(exam) {
//     let kor = exam.kor; // print객체는 kor 속성 갖게됨
//     let eng = exam.eng;
//     this.total = exam.total; 

//     console.log("kor " + kor); // this.kor 로 this = print
//     console.log("eng " + eng);
//     console.log("total :" + total.bind(obj)()) //this.total()로 this가 print
//     // this.total() = this.kor + this.eng 하게 되는데, print에 kor, eng값이 있으니까 50출력 
// }
// print(obj);

//------------------------------------------------
// let year = 2023;
// let month = 1;
// let day = 4;

// // let regdate =?

// let template = `${year}-${month}-${day}`;
// console.log(template);
// 문자랑 이거저거 섞이면서 헷갈리게되니까 tempalte를 쓰는게 좋다.
// JS는 " " '' 도 섞이게 되고 무튼 써야 좋음!!!

// let className ='p-elect';
// let title = '스마트폰';

// let product = `<section class=${className}>
//                     <h1>${title} \n\n\n\n</h1>
//                 </sectio>` //이런식으로 해결 가능
// console.log(product);
//------------------------------------------------

        // let kor = 20;
        // let eng = 30;

        // let obj = {kor,eng,total(){
        //     return  this.kor+ this.eng;
        // }};

        // function print(exam){ // 이 안의 this는 print의 this다.
        //     let kor = exam.kor;
        //     let eng = exam.eng;
        //     let total = exam.total;
        //     // let total = this.kor + this.eng;
        //     // 그러나 print에는 this.kor, this.eng 속성이 없다.
        //     // let total = undefined + undefined;
        //     // total(); -> undefined + undefined; -> NaN
        //     // 만약 obj의 total()이 kor + eng; 였다면 -> 50
           

        //     console.log("kor:"+ kor);
        //     console.log("eng:"+ eng);
           
        //     console.log("내말 맞쥐?")
        //     console.log("total:"+ total());
        // }

//------------------------------------------------


        // let kor = 20;
        // let eng = 30;

        // // let obj = {kor,eng,total(){
        // //     return  this.kor+ this.eng;
        // // }};
        // // total 함수의 this는 누구꺼일까? - obj가 호출하니까 obj아닌가?

        // let obj = {kor : kor,
        //            eng : eng,
        //            total : function(){
        //                 console.log(this);
        //                 return this.kor+ this.eng;
                        
        //         }};

        // obj.total();


 //------------------------------------------------

// let cssAttr = "background-color";



// let style = {
//     width : "100px",
//     "ackgroud-color" : "red",
// }

// console.log(style["ackgroud-color"]); //red

// //" " 묶는 대신 변수를 사용한다면??
// // [ ] : computed property를 사용하면 변수명에 연산도 가능하다.


 //------------------------------------------------


//키가 값으로 변경되는게 가능하다. 

// let exam = { 
//     kor : 10, //이건 this.kor 이고 this = exam
//     eng : 20,
//     math : 30,
// }

// console.log(this.kor); //여기서 this는 window
// console.log(exam.kor); //10


//------------------------------------------------
// 키가 값으로 변경되는게 가능하다. 

// let attName = "korean";

// let exam = { 
//     [attName] : 10, //이건 this.kor 이고 this = exam
//     eng : 20,
//     math : 30,
// };

// lattName = "kor";

// console.log(`kor : ${exam.undefined}`); //undefined

//------------------------------------------------

// let attName = "kor";

// let exam = { 
//     [attName] : 10, 
//     eng : 20,
//     math : 30,
// };


// console.log(`kor : ${exam.kor}`); //

// //내가 원하는 만큼 뽑아낼 수 있음

// let { kor, eng : english, mamm = 5 } = exam;
// console.log(kor, english, mamm); // 10, 20, 5




//------------------------------------------------

//*************************************************************여기보기 */
// let kor = 20;
// let eng = 30;

// let obj = {kor:200, eng:300 ,total(){
//     console.log(this);
//     return kor+ eng; //묵시적 아님 케바케로나뉨 - 난 여기서 this.kor 이 되서 this가 obj된다 생각했는데
//     //아니라 지역변수 let kor을 가리킴  (개념이 섞여버림)

// }};

// function obj2(){
//     this.kor;
//     this.function name(params) {
        
//     }
// }

// let fun = obj.total;



// console.log(obj.total());
// total 함수의 this는 누구꺼일까? - obj가 호출하니까 obj아닌가?

// let obj = {kor : kor,
//            eng : eng,
//            total : function(){
//                 console.log(this);
//                 return this.kor+ this.eng;
                
//         }};

// obj.total();

//-----------------------------------------------------------
let attName = "kor";

let exam = { 
    [attName] : 10, 
    eng : 20,
    math : 30,
    student : {
        name : 'newlec',
        phone : '010-2222-3333',
    }
};


let {kor, eng : english, math, student} = exam;
// console.log(phone);
// console.log(math);
// console.log(name);

//student만 하면 객체를 뽑아 온 것
console.log(student);
let {name, phone} = student;
console.log(name);
console.log(phone);