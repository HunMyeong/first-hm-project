/*
    배열 원소의 합계 구하여 출력하기
    22.9.28
*/
let a = [2, 13, 34, 23, 63, 41, 24, 66, 9, 12];
let i = 0;      //배열 인덱스용 변수
let sum = 0;    //합계 계산용 변수

while (i < a.length) {
    sum += a[i];
    i++;
}

console.log(`배열 a의 합계 : ${sum}`);