//화살표 함수
//익명함수가 => 화살표 함수로 변경

// let add = function(a, b) {
//     return a + b;
// }

//add(1, 2); //호이스팅 불가능

// let add = (a, b) => {
//     return a + b;
// }

//규칙1 - 코드가 한줄이면 {}와 return을 생략함(자동리턴)
let add = (a, b) => a + b;
let some = () => console.log("hello some");

//규칙2 - 매개변수가 1개라면 ()를 생략 가능
let x = a => a % 2 == 0 ? "짝수" : "홀수";

//규칙3 - 객체는 {}로 표현되는데, 만약 객체 반환시 ()로 감싸야 함
//이렇게 하면 오류
//let person = () => {name: "홍길동"};
//이렇게 해야 반환됨
let person = () => ({name: "홍길동"});
console.log( person() );

console.log("---------------------------------------");
//선언적 함수
function myName(name, age) {
    return `{name}님의 나이는 ${age}입니다`;
}
//익명 함수
let myname = function(name, age) {
    return `{name}님의 나이는 ${age}입니다`;
}

//화살표 함수
let Myname = (name, age) => {
    return `{name}님의 나이는 ${age}입니다`;
};
