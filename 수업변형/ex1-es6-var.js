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
// let attName = "kor";

// let exam = { 
//     [attName] : 10, 
//     eng : 20,
//     math : 30,
//     student : {
//         name : 'newlec',
//         phone : '010-2222-3333',
//     }
// };


// let {kor, eng : english, math, student} = exam;
// // console.log(phone);
// // console.log(math);
// // console.log(name);

// //student만 하면 객체를 뽑아 온 것
// console.log(student);
// let {name, phone} = student;
// console.log(name);
// console.log(phone);

//-----------------------------------------------------------
// let kors = [10,20,30];

// //배열은 '인덱스'를 기준으로 들어감, 객체는 '키' 로
// let[kor1, kor2, kor3] = kors; //배열일 때 [ ] 이용

// console.log(kor1);
// console.log(kor2);

// let  kors2 = [40,70,30]; //이걸 기존변수 kor1, kor2 ..에 담고싶다면? let [kor1, ,...] 하면 재선언이라 오류남

// [kor1, kor2, kor3] = kors;  //선언을 빼면 된다!

// console.log(kor1);
// console.log(kor2);

//---------------------------------------
//--------------------------------------23.01.05 목


// let attName = "kor";

// let exam = { 
//     [attName] : 10, 
//     eng : 20,
//     math : 30,
//     student : {
//         name : 'newlec',
//         phone : '010-2222-3333',
//     }
// };


// let {kor, eng : english, math, student} = exam;

// let {name, phone} = student;

// let std1 = {
//     name : 'dragon',
//     phone : '010'
// };

// //배열처럼
// // {name phone} = std1; error 배열과 달리, name, phone 에 새로 덮어씌우고 싶으면 전체를 ( )감싸줘야 함
// ({name, phone} = std1);
// console.log(phone);

// let a, b;
// [a,b] = kors2; // 배열을 뽀갤때는  [ ] 을 이용하고
// console.log(a);  //40

// a = 20;
// b = 30;
// // a와 b의 위치를 바꾸고싶을 때, tmp할 필요가 없음
// [a,b] = [b,a]; //a와 b를 [b,a] 배열에 담고 그걸 뽀개서 배열에 담음
// console.log(a); // 30 [a,b] 이렇게 담긴걸 이름으로 꺼낼 수 있다는것도 장점

// //JS는 문장 구분을 문장내려쓰기, ; 두 가지로 가능한데, 내려쓰기로 구분되려면 문장이 완전해야 한다.

// let[,,kor4] = kors;
// console.log(`kors4의 값은? ${kor4}`); //가능!

// //배열에  10개길이가 있는데, 2개는 변수로 8개는 배열로 뽀개는게 가능할까?

//  let nums = [1,2,3,4,5,6,7,8,9,10];
// //  let[n1,n2,rest] = nums;
// //  console.log(rest); //3만 담김

//  //나머지를 담아줄 수 있는 '나머지 연산자'가 있음
//  // ... 이 나머지란 의미
//  let[n1,n2,...rest] = nums;
//  console.log(n1);
//  console.log(rest); //배열에 담아줌

//-----------------------------------------------------

