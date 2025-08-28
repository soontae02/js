//1. 구구단 5단을 for문 출력
for (i = 1; i < 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}


console.log("--------------------");
//2. 7~100까지 정수중에서 7의 배수를 출력
//문자열으 합 -> 가로로 출력
let str = "";
for (a = 7; a <= 100; a+=7) {
    str += a + "->";
}
console.log(str);


console.log("--------------------");
//3. 1~50까지 홀수의 합
let sum = 0;
for (b = 1; b <= 50; b++) {
    if (b % 2 === 1) {
        sum += b;
    }
}
console.log(`1~50까지의 합: ${sum}`);


console.log("--------------------");
//4. 100의 약수의 합
d = 0;
for (c = 1; c <= 100; c++) {
    if(100 % c === 0) {
        d += c;
    }
}
console.log(`100의 약수의 합: ${d}`);
