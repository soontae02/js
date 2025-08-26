var a = 5;
var b = 3;

console.log(a == b); //false
console.log(a != b); //true
console.log(a >= 5); //true
console.log(a < 10); //true

//===, !== (타입까지 비교)
let x = "5";
let y = 5;
console.log("==:", x == y);   //true
console.log("===:", x === y); //false
console.log("!=", x != y);    //false
console.log("!==", x !== y);  //true

let c; //undefined
let d = null;
console.log(c == d);  //true
console.log(c === d); //false