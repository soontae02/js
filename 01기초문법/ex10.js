let a = true;
let b = false;

console.log("&&:", (a && b)); //false
console.log("||:", (a || b)); //true
console.log("!:", !a);        //false

//3의 배수이면서 4의 배수인지 판별
let x = 12;
console.log(x % 3 === 0 && x % 4 === 0); //true