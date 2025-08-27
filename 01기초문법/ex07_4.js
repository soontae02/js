//&& - 양쪽 항이 모두 true여야 true
//|| - 양쪽 항중 한쪽만 true여도 true
let a = true;
let b = false;

console.log("&&의 결과:" + (a && b) ); //f
console.log("||의 결과:" + (a || b) ); //t
console.log("!:" + !a );

//어떤수가 3의 배수이면서 4의 배수인 경우 - 조건식으로 
let x = 12;
console.log( x % 3 === 0 );
console.log( x % 4 === 0 );
console.log( x % 3 === 0 && x % 4 === 0 );
