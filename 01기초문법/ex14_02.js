//반복문의 중첩 활용
/*
반복의 회전은 바깥회전에 따라서 안쪽회전이 바뀔 수 있음.
*
**
***
****
*****
*/
let star = 5;

let result1 = "";
for (let i = 1; i <= star; i++) {
    for (let j = 1; j <= i; j++) {
        result1 += "*";      
    }
    //줄바꿈문자열
    result1 += "\n"
}
console.log(result1);
console.log("-------------------------------");
/*
*****
****
***
**
*
*/

let result2 = "";
for (let a = 1; a <= star; a++) {
    for (let b = 5; b >= a; b--) {
        result2 += "*";
    }
    result2 += "\n"
}
console.log(result2);



