/*
    배열 원소의 합계 구하여 출력하기    100을 넘어가면 안됨
    22.9.28
*/
let a = [2, 13, 34, 23, 2, 6, 41, 24, 66, 9, 12];
let i = 0;      //배열 인덱스용 변수
let sum = 0;    //합계 계산용 변수  100이하까지
let count = 0;

while (i < a.length) {
    sum += a[i];
    if(sum > 100){
        sum -= a[i];
        break;
    }
    i++;
    
}

console.log(`${i}개의 합계 : ${sum}`);