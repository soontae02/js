/*
1. registUser(유저객체)를 하나 생성합니다.
2. 전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행합니다.
3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하는 함수를 생성.
*/

function registUser(user) {
    try {
        if ( user.name.length <= 2 || user.name === null ) {
            throw new Error("정확한 이름을 입력해주세요");
        }
        return user.name;

    } catch (error) {
        console.log(error.message);
        return "";
    }
}

let user1 = { name: "", addr: "서울시" };
console.log(registUser(user1));

let user2 = { name: "승태", addr: "서울시" };
console.log(registUser(user2));

let user3 = { name: "강승태", addr: "서울시" };
console.log(registUser(user3));