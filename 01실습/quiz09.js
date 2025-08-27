//1. 구구단 5단을 for문 출력
for (i = 1; i < 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}


console.log("--------------------");
//2. 7~100까지 정수중에서 7의 배수를 출력
for (a = 7; a <= 100; a++) {
    if (a % 7 ===0) {
        console.log(a)
    }
}


console.log("--------------------");
//3. 1~50까지 홀수의 합
sum = 0;
for (b = 1; b <= 50; b++) {
    if (b % 2 != 0) {
        sum += b;
    }
}
console.log(sum);


console.log("--------------------");
//4. 100의 약수의 합
d = 0;
for (c = 1; c <= 100; c++) {
    if(100 % c === 0) {
        d += c;
    }
}
console.log(d);
