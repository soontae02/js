// 문제 1: 별찍기 (레벨 1)
// - 숫자를 받아서 해당 개수만큼 별을 출력하는 함수 printStar를 만들어보세요.
// - 반환값이 없는 함수입니다.
function printStar(star) {
    let result = "";          
    for (let i = 0; i < star; i++) {
        result += "*";       
    }
    console.log(result);      
}

printStar(5);


// 문제 2: 현재 시간 출력 (레벨 1)
// - 현재 시간을 "현재 시간: [시간]" 형태로 출력하는 함수 showTime를 만들어보세요.
// - 반환값이 없는 함수입니다.
let now = new Date();
let hours = now.getHours();      // 시 (0-23)
let minutes = now.getMinutes();  // 분 (0-59)
let seconds = now.getSeconds();  // 초 (0-59)

function showTime() {
    console.log(`현재 시간: ${hours}시 ${minutes}분 ${seconds}초`)
}

showTime();


// 문제 3: 짝수 판별 (레벨 2)
// - 숫자를 받아서 짝수인지 홀수인지 판별하는 함수 isEven을 만들어보세요.
// - 짝수면 true, 홀수면 false를 반환하세요.
function isEven(even) {
    if (even % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isEven(5);


// 문제 4: 원의 넓이 (레벨 2)
// - 반지름을 받아서 원의 넓이를 계산하는 함수 circleArea를 만들어보세요.
// - 원의 넓이 = π × 반지름² (π는 3.14159 사용)
function circleArea(area) {
    console.log(`원의 넓이: ${3.14159*area*area}`)
}

circleArea(3);


// 문제 5: 약수 개수 (레벨 3)
// - 양의 정수를 받아서 약수의 개수를 세는 함수 countDiv를 만들어보세요.
// - 예시: 12의 약수는 1, 2, 3, 4, 6, 12이므로 6개
let sum = 0;

function countDiv(div) {
    for (let i = 0; i <= div; i++) {
        if (div % i === 0) {
            sum ++;
        }
    }
    console.log(`약수의 개수: ${sum}개`)
}

countDiv(30);


// 문제 6: 절대값 반환 (레벨 3)
// - 숫자를 받아서 절대값을 반환하는 함수 abs를 만들어보세요.
// - 예시: abs(-5) → 5, abs(3) → 3
function abs(num) {
    if(num < 0) {
        return -num;
    } else {
        return num;
    }
    // return num < 0 ? -num : num; // 3항 연산자로도 가능
}

console.log(`절대값: ${abs(-3)}`);


// 문제 7: 최대값 반환 (레벨 4)
// - 세 개의 숫자를 받아서 가장 큰 수를 반환하는 함수 max를 만들어보세요.
// - Math.max() 함수는 사용하지 마세요.
function max(a, b, c) {
    let result;

    if (a >= b && a >= c) {
        result = a;
    } else if (b >= a && b >= c) {
        result = b;
    } else {
        result = c;
    }

    console.log(`가장 큰 수: ${result}`);
    return result;
}

max(1,2,3);


// 문제 8: 완전수 판별 (레벨 5)
// - 양의 정수를 받아서 완전수인지 판별하는 함수 isPerfect를 만들어보세요.
// - 완전수: 자신을 제외한 약수들의 합이 자신과 같은 수
// - 예시: 6의 약수는 1, 2, 3, 6이고, 1+2+3=6이므로 완전수

function isPerfect(perfect) {
    
    let sum = 0;

    for (let i = 0; i < perfect; i++) { //num을 제외한 약수의 합
        if (perfect % i === 0) {
            sum += i;
        }      
    }

    return sum === perfect;
}

console.log(isPerfect(6));