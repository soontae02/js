//1. 이 배열의 합계와 평균을 출력 해주세요.
let number = [10,20,30,40,50];
let sum = 0;
let avg = 0;

for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
avg = sum/number.length;

console.log(`합계: ${sum}, 평균: ${avg}`);


//2. 이 배열에서 최대값, 최소값 찾아서 출력
//변수를 잘 활용해야 함.
let score = [85,92,70,96,91,60,100];
let max = score[0];
let min = score[0];

for (let i = 0; i < score.length; i++) {
    if (score[i] > max) {
        max = score[i];
    }

    if (score[i] < min) {
        min = score[i];
    }
}

console.log(`최대값: ${max}, 최소값: ${min}`);

//3. 짝수 필터링
//이 배열에서 짝수만 필터링하여 evenNum에 저장하세요.
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];

for (let v of numbers) {
    if(v % 2 === 0) {
        evenNum.push(v);
    }
}

console.log(evenNum)

//4. 배열을 값을 뒤집어서 reverse배열에 저장하세요.
let arr = [1,2,3,4,5];
let reverse = [];

for (let i = arr.length - 1;  i >= 0; i--) {
    reverse.push(arr[i]);
}

console.log(reverse);


//5. target값이 배열에 포함되어 있으면 해당 인덱스를 출력, 없으면 -1을 출력.
//힌트 - boolean변수를 이용
let search = ['a','b','c','d','e'];
let target = 'e'
let bool = false;

for (let i = 0; i < search.length; i++) {
    if (target === search[i]) { //찾음
        index = i; //인덱스 기록
        bool = true; //찾음 or 못찾음
        break;
    }
}
if(bool) {
    console.log(`${target}의 위치는 ${index}번째 입니다`)
}

//6. word배열의 문자열의 길이를 저장하는 wordLength배열을 만들어 주세요.
let word = ['apple', 'banana', 'melon', 'grape', 'orange'];
let wordLength = []; //5, 6, 5, 5, 6 문자열길이확인 = 문자열.length

for (let v of word) {
    wordLength.push(v.length);
}

console.log(wordLength);

