let age = 20;
let result = age >= 20 ? "성인입니다" : "미성년자입니다";
console.log(result);

let ran = parseInt(Math.random() * 10); //0~9 정수
let r = ran % 2 === 0 ? "짝수" : "홀수";
console.log("랜덤값", ran, "은", r, "입니다");