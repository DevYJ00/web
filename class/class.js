let kors = [10,20,30];

//배열은 '인덱스'를 기준으로 들어감, 객체는 '키' 로
let[kor1, kor2, kor3] = kors; //배열일 때 [ ] 이용

console.log(kor1);
console.log(kor2);

let  kors2 = [40,70,30]; //이걸 기존변수 kor1, kor2 ..에 담고싶다면? let [kor1, ,...] 하면 재선언이라 오류남

[kor1, kor2, kor3] = kors;  //선언을 빼면 된다!

console.log(kor1);
console.log(kor2);

//---------------------------------------


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

let {name, phone} = student;

let std1 = {
    name : 'dragon',
    phone : '010'
};

//배열처럼
// {name phone} = std1; error 배열과 달리, name, phone 에 새로 덮어씌우고 싶으면 전체를 ( )감싸줘야 함
({name, phone} = std1);
console.log(phone);

let a, b;
[a,b] = kors2; // 배열을 뽀갤때는  [ ] 을 이용하고
console.log(a);  //40

a = 20;
b = 30;
// a와 b의 위치를 바꾸고싶을 때, tmp할 필요가 없음
[a,b] = [b,a]; //a와 b를 [b,a] 배열에 담고 그걸 뽀개서 배열에 담음
console.log(a); // 30 [a,b] 이렇게 담긴걸 이름으로 꺼낼 수 있다는것도 장점

//JS는 문장 구분을 문장내려쓰기, ; 두 가지로 가능한데, 내려쓰기로 구분되려면 문장이 완전해야 한다.

let[,,kor4] = kors;
console.log(`kors4의 값은? ${kor4}`); //가능!

//배열에  10개길이가 있는데, 2개는 변수로 8개는 배열로 뽀개는게 가능할까?

 let nums = [1,2,3,4,5,6,7,8,9,10];
//  let[n1,n2,rest] = nums;
//  console.log(rest); //3만 담김

 //나머지를 담아줄 수 있는 '나머지 연산자'가 있음
 // ... 이 나머지란 의미
 let[n1,n2,...rest] = nums;
 console.log(n1);
 console.log(rest); //배열에 담아줌

 //-------------------------------------------------------------

//  let set = new Set();
//  set.add(5);
//  set.add("5");
//  set.add(2);
//  set.add(5);

//  for(let n of set) 
//     console.log(n); // 5 5 2 - 5 하나는 문자 ( 마지막 중복된 수는 걸러줌 )

let set = new Set([2,5,21,8,4,3,2,6,6,3,4,1,321,7,43,21])
// for(let n of set)
// console.log(n);
// console.log(set.size); //11
//------------------------------------------------------------------
// set.forEach((v)=>{
//     // console.log(v);
//     console.log(`value : ${v}`);
// })

//---------------------------------------------------------------
//키를 뽑아보자 for in  vs 값을 뽑는것 for of
// forEach 를 사용하면 둘 다 가능

for(let k in set) {
    console.log(`키 값 : ${k}`);
}

// set.forEach((v,k)=>{
//     console.log(`key:${k}, value:${v}`);
// })
//---------------------------------------------------------------
// let map = new Map();
// map.set("id",1);
// map.set("title","map이란??");
// map.set("content","주말은언제?");

// console.log("forEach----------------");
// map.forEach((k,v) =>{
//     console.log(`key : ${k}, value : ${v}`);
// });

//---------------------------------------------------------------

let notice = new Map();
notice.set("id",1);
notice.set("title","map is...");
notice.set("writer", "newlec");

//id, title, writer 이 속성인데 이걸 여러번 쓸 거면 클래스로 사용하고
//한 번만 사용할거면 임시형 데이터 구조 Map(컬렉션) 을 사용

//하나씩 뽑는 경우
console.log(notice.get("title")); //키를 가지고 꺼냄

//한번에 열거로 출력도 가능
notice.forEach((v,k) => {
    console.log(`key : ${k}, value : ${v}`);
}); //사실 이건 old버전이라 우린 for of를 쓰는게 좋음!

//for of
for(let key of notice.keys()) // map명.keys() <- 키만 꺼낼 수 있음
console.log(`key : ${key}`);

for(let v of notice.values())
console.log(`value : ${v}`);

//key value 한번에 뽑는것도 가능
for(let [k,v] of notice.entries()) //set 계열 컬렉션 - 여기 기능 쓸라면 여기로
console.log(`key : ${k}, value : ${v}`);

console.log("다이렉트로 뽑기")
for(let [k,v] of notice) // map에서 바로 뽑아내기
console.log(`key : ${k}, value : ${v}`);

//notice에서 뽑아낸게 배열임 - 반환되는 배열은 [키, 값] 이니까
for(let n of notice)
console.log(` value : ${n[1]}`);

console.log(`key 뽑기`)
for(let n of notice)
console.log(`key : ${n[0]}`);


console.log("value만 뽑기2")
for(let [,v] of notice) // map에서 바로 뽑아내기
console.log(`value : ${v}`);

// console.log("key만 뽑기")
// for(let [k,] of notice) // map에서 바로 뽑아내기
// console.log(`key : ${k}, value : ${v}`);


//---------------------------------------
//object를 map으로 만들 수 없나여?
let exam3 = {
    kor : 10,
    eng : 20,
    math : 30

};

for(let [k,v] of Object.entries(exam3))  
console.log(v);

for(let [k,v] of Object.entries(exam3))  
console.log(k);

//공지사항 관리해야할 때 목록을
let list = [
    { id : 1, title : "jsp is...", writerId : "newlec" },
    { id : 2, title : "servlet is...", writerId : "newlec" },
    { id : 3, title : "spring is...", writerId : "newlec" },
    { id : 4, title : "kjjj is...", writerId : "newlec" },

];

list.forEach((n)=>{
    // console.log(n);
}); //값만 읽어 옴


let ar = list.map((n)=>{return `<span>${n.title}</span>`}); //처리한 후 새로운 걸 반환 - 제목만 꺼낸 배열이 만들어짐
console.log(ar);


list.forEach()