// 문자열 다루기 함수

let str = "hello world javascript";

console.log(`문자열 길이: ${str.length}`); //문자열 길이: 22
//문자열 한글자 자르기
let s1 = str.charAt(3);
console.log(`index 3번째 문자열: ${s1}`); //index 3번째 문자열: l
console.log(`index 3번째 문자열: ${ str.charAt(5) }`); //index 3번째 문자열:

//특정 문자 기준으로 문자열 자르기
let s2 = str.split(""); //글자 하나씩 자르기 
console.log(s2); 
//['h', 'e', 'l', 'l', 'o',' ', 'w', 'o', 'r', 'l','d', ' ', 'j', 'a', 'v','a', 's', 'c', 'r', 'i','p', 't']
let s3 = str.split(" "); //공백 기준으로 자르기
console.log(s3); 
//[ 'hello', 'world', 'javascript' ]

//특정 문자의 위치 자르기
let s4 = str.substring(6, 11);
console.log(`6~11사이의 문자열: ${s4}`); //6이상~11미만 추출 
//6~11사이의 문자열: world

let s5 = str.substring(10);
console.log(s5); //10미만 절삭
//d javascript

//특정 위치로 문자열 찾기
console.log( "l이 처음으로 발견된 위치:" + str.indexOf("1") ); //l이 처음으로 발견된 위치:-1
//hello world javascript
console.log( "5번째 인덱스 이후에 발견된 o의 위치:" + str.indexOf("o", 5) ); //5번째 인덱스 이후에 발견된 o의 위치:7
console.log( "마지막부터 a찾기:" + str.lastIndexOf("a") ); //마지막부터 a찾기:15
console.log( "포함되어 있으면 true:" + str.includes("java") ); //포함되어 있으면 true:true
console.log( "hell로 시작 하면 true:" + str.startsWith("hell") ); //hell로 시작 하면 true:true
console.log( "'헑!'으로 끝나면 true" + str.endsWith("헑!") ); //'헑!'으로 끝나면 truefalse

//문자엷 변환
console.log( "=".repeat(20) ); //문자열 20회 반복 //====================
console.log( str.replace("l", "헐") ); //첫번째로 발견되는 l => 헐 으로 변환 //he헐lo world javascript
console.log( str.replaceAll("l", "헑") ); //모든 1 => 헑 으로 변환 //he헑헑o wor헑d javascript

console.log( " hello   ".trim() ); //양쪽 공백 제거 //hello

let text = "Hello";
console.log( text.toUpperCase() ); //전부 대문자 //HELLO
console.log( text.toLowerCase() ); //전부 소문자 //hello








