let year = 2023;
let month = 1;
let day = 4;

let regdate = year + "-" + month + "-" + day;
console.log(regdate);

let template = `${year}-${month}-${day}`; // 백틱이다. 문자열이 아니다.
console.log(template);

let product = '<section class="p-elect">' +
                '<h1>?</h1>' +
              '</section>'; // 더블보다 싱글 쓰게됨

let product2 = '<section class="p-elect">\
                  <h1>?</h1>\
                </section>';

let product3 = `<section class="p-elect">
                  <h1>?</h1>
                </section>`;

let className = 'p-elect';
let title = '스마트폰';
let product4 = `<section class="` + className + `">
                    <h1>?</h1>
                </section>`;

let product5 = String.raw`<section class="${className}">\n\n\n
                    <h1>${title}</h1>\n\n\n
                </section>`;

console.log(product5);
                
// console.log(x); // Cannot access 'x' before initialization at test.html:9:21
//                 // 이 시기에 변수 선언은 된 것, 코드 실행과 상관없이 미리 준비되니까
//                 // var였으면 undefined
// let x = 3;

console.log("--------------------------------");

let attName = 'kor';

let exam = {
  [attName]:10,
  eng:20,
  math:30,
  student:{ // 중첩된 객체
    name:'newlec',
    phone:'010-2222-3333'
  }
};

console.log(`kor:${exam.kor}`);

// let {kor, eng} = exam; // 내가 뽑고싶은 만큼만 뽑는다. 변수명만 같게 해주면 된다.
let {kor, eng:english, ma=0, student} = exam;
let {name, phone} = student;

console.log(kor,english); // 10 undefined
console.log(name); // 10 undefined
console.log(phone); // 10 undefined

let std1 = {name:'dragon', phone:'010'};
console.log("소괄호--------------------------------");
({name, phone} = std1); // Uncaught SyntaxError: Unexpected token '='
console.log(name); // 10 undefined
console.log(phone); // 10 undefined


// 중첩된 객체를 일반 지역변수로 뽑아낼 수 있을지

// ---1/5---------------------------------------------
// let kors = [1,2,3];
// let [kor1, kor2, kor3] = kors;
// console.log(kor1);

// let kors2 = [4,5,6];
// // 선언은 빼고 대입만 하고싶어
// [kor1, kor2, kor3] = kors2;
// console.log(kor1);

// // 객체를 뽀갤때도 대입만 가능할까?

// let a, b;
// // 기존의 변수에도 대입 가능할까?
// [a, b] = kors2;
// console.log(a);

// a = 20;
// b = 30;
// // 배열 만들어서 뽀갠거야
// console.log(a,b);
// [a,b]=[b,a];
// console.log(a,b);


let kors = [10, 20, 30];

let [, , kor3] = kors;
console.log(kor3);

let nums = [1,2,3,4,5,6,7,8,9,10];
let [n1,n2, ...rest] = nums;
console.log(rest);

let set = new Set([2,3,45,3,2,6,3,4,4,5,6,7,8,9]);
// set.add(5);
// set.add('5');
// set.add(2);
// set.add(5);

console.log('--------------------');
for(let n of set)
console.log(n);
console.log('--------------------');

for(let k in set)
console.log(k);

console.log('--------------------');
// console.log(set.has(5));
// console.log(`set size:${set.size}`);

// delete 지우기
// clear 다지워짐

set.forEach((v)=>{
  console.log(`vlaue : ${v}`);
});

set.forEach((v,k)=>{
  console.log(`key : ${k}, vlaue : ${v}`);
});

console.log('--------------------');
let map = new Map();
map.set('id',1);
map.set('title','map이란?');

map.forEach((v,k)=>{
  console.log(`key : ${k}, value : ${v}`);
});

console.log('--------------------');
let notice = new Map();
notice.set('id', 1);
notice.set('title', 'map is ...');
notice.set('writer', 'newlec');
// 꾸준히 쓸 경우 class로 만들기
// 아닐 경우 map. 한 번만 쓸 경우
// 묶어서 한 번에 사용해야할 임시 데이터 구조

console.log(notice.get('title')); // 속성명을 가지고 꺼낸다.

notice.forEach((v,k)=>{
  console.log(`key:${k}, value:${v}`);
});

for(let key of notice.keys()) // key만 꺼내는 set을 제공해준다.
console.log(`key:${key}`);

for(let value of notice.values())
console.log(`value:${value}`);

for(let [k,v] of notice.entries())
console.log(`key:${k}, value:${v}`);
console.log('--------------------');
for(let [,v] of notice)
console.log(`key:, value:${v}`);
for(let [k,] of notice)
console.log(`key:${k}, value:`);

console.log('--------------------');
// 배열로 나온다.
for(let n of notice)
console.log(`n:${n}`);

console.log('--------------------');
for(let n of notice)
console.log(`n:${n[0]}`);

for(let n of notice)
console.log(`n:${n[1]}`);


// ==============================
let exam3 = {
  kor:10,
  eng:20,
  math:30
};

console.log('--------------------');
console.log('--------------------');
// for(let [k,v] of exam3) //exam3 is not iterable
//   console.log(`key:${k}, value:${v}`);
  
for(let [k,v] of Object.entries(exam3)) 
  console.log(`key:${k}, value:${v}`);


// 항목이 두 개짜리 배열
// 오브젝트를 만드는 2가지 방법

// let obj = new Object();
// let obj = {};

let obj = Object.create(null);
// 정적인 스태틱 메소드 살펴보기 나중에
// 인스턴스가 아니야

let list = [
  {id:1, title:'jsp is..', writerId:'newled'},
  {id:2, title:'servlet is..', writerId:'newled'},
  {id:3, title:'javascript is..', writerId:'newled'},
  {id:4, title:'spring is..', writerId:'newled'}
];
// 컬렉션이 아닌 맵
// 맵핑함수
// 입력 받을 때는  notice 배열, 나갈때는~ 다른~ 별도의 결과물을 만들어내는
// forEach는 입력받은걸 써먹지만
// 받은 것을 변환해서 다른 형태로 만드는 것

list.forEach((n)=>{});
let ar = list.map((n)=>{ return n.title }); // 제목만 뽑아낸 배열이 만들어짐
console.log(ar)
let ar2 = list.map((n)=>{ return n.title+'메롱' }); 
console.log(ar2)
let ar3 = list.map((n)=>{ return n.title.length }); 
console.log(ar3)
let ar4 = list.map((n)=>{ return `<span>${n.title}</span>` }); // 태그로도?
console.log(ar4)
