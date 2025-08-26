//자동형변환 -> 연산시에 자동으로 타입이 변하게 됩니다.
let num = 10 + 3.14;
console.log(num);

let text = "10" + 3.14 + 5;
console.log(text); //문자열은 가장 강한 타입

let text2 = 3.14 + 5 + "10";
console.log(text2);

let num2 = "5" * 3; //곱셈 → 숫자로 변환됨
console.log(num2);

//명시적 형변환 -> 강제로 타입을 바꾸는 과정
let result = parseInt("5") + 1;
console.log(result); //6
console.log(parseInt("바꿀 수 없는 값")); //NaN
console.log(parseFloat("3.14"));
