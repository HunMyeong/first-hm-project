/*
    배열 원소의 합계 구하여 출력하기    100을 넘어가면 안됨
    22.9.28
*/
let a = [2, 13, 34, 23, 2, 6, 41, 24, 66, 9, 12];
let i = 0;      //배열 인덱스용 변수
let sum = 0;    //합계 계산용 변수  100이하까지
let count = 0;

while (i < a.length) {
    if(sum + a[i] <= 100)   //sum에 a[i]를 더한 값이 100 이하인가?
        sum += a[i];        //이하라면 sum에 a[i]를 더하라.
    else break;             //초과라면 break;로 while문 탈출.
    i++;
    //count++;              //i로 해결가능.
}

console.log(`${i}개의 합계 : ${sum}`);