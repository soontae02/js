//변수의 swap
let x = 100;
let y = 54;
let temp = 0;

temp = x;
x = y;
y = temp; //연결해서 저장
console.log(`x값 ${x}, y값 ${y}`)

//정렬 - 선택정렬 - 가장작은 값을 앞으로 가져옴
let arr = [100, 64, 30, 22, 54, 88, 76];
//1회전 - 22 100 64 30 54 88 76
//2회전 - 22 30 100 64 54 88 76
//3회전 - 22 30 54 100 64 88 76
//4회전 - 22 30 54 64 100 88 76

//바깥반복문을 타겟 index, 안쪽반복문을 비교할 index
for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i+1; j < arr.length; j++) {
        console.log(i, j);
        if(arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
