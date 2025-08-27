//문제1
//100까지의 수 중에서 3의 배수이면서 4의 배수인 수를 출력.
let i = 1;

while (i <= 100) {
    if (i % 3 ===0 & i % 4 === 0) {
        console.log(i);
    }
    i++;
}

//문제2
//524의 약수의 개수를 구하세요.
let a = 1;
let b = 0;

while (a <= 524) {
    if (524 % a === 0) {
        b++;
    }
    a++;
}

console.log(`524의 약수의 개수: ${b}`)

//문제3
//100까지의 수중에서 9의 배수의 합계
let c = 1;
let sum = 0;

while (c <= 100) {
    if (c % 9 === 0) {
        sum+=c
    }
    c++
}

console.log(`9의 배수의 합계: ${sum}`)

