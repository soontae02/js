let a = 5 * 3;
let b = 5 / 5; //몫
let c = 5 % 5; //나머지

console.log(a, b, c);
console.log(parseInt(b));

//전위연산
let x = 5;
let pre = ++x;
console.log("x는: " + x);
console.log("pre는: " + pre);

//후위연산
let y = 5;
let post = y++;
console.log("y값: " + y);
console.log("post값: " + post);

//증감 연산
let num = 1;
num++;
num--;
