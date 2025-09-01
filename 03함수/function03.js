//return - 함수가 실행한 결과를 계산하고 값을 돌려줌.
function add(a, b) {
    return a + b;
}

let result = add(3, 5); //리턴을 받아서 저장하는 코드
console.log(result);
//리턴이 있는 함수는 호출문이 실행결과를 돌려받기 때문에, 출력문에 한번에 쓸 수 있음.
console.log(add(5,5));
//리턴이 있는 함수는 함수의 중첩도 가능
let result2 = add( add(1,2), add(3,5) );
console.log(result2);

//return -> 돌려주다 + 함수의 종료
//반드시 양의 정수값만 전달되어야 하는 함수
function some(num) {

    if(num <= 0) {
        return false; //함수의 종료에 의미로도 사용
        //return; 키워드를 사용하면 undefined가 반환되기 때문에 boolean값을 반환하는게 일반적
    }

    return "전달받은 양의 정수는" + num + "입니다";
    console.log("이거 실행되나"); //동작하지 않음
}

console.log( some(10) );

