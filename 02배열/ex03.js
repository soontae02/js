/*
배열의 반복 for문

*/
let arr = [1,2,3,4,5,6,7];

//합계
let sum = 0;

for(let i = 0; i < arr.length; i++); {
    sum += arr[i];
}

//for ~ in구문
//index를 뽑아줌
console.log("------------------------------");

for (let i in arr) {
    console.log(`인덱스 ${i}, 값 ${arr[i]}`);
}

console.log("------------------------------");
//for ~ of구문 ES06
for(let value of arr) {
    console.log(`값 ${value}`);
}

