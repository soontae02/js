let point = parseInt(Math.random() * 100 + 1);
let grade = point >= 60 ? "합격" : "불합격";

console.log("점수:" + point);
console.log(grade);

if(true) {
    let name = "홍길동";
}
//console.log(name); //에러 (블록 스코프)
