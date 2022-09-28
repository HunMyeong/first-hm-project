let b = [2,3,45,65,23,56,67,233,44,56,99,102];
let odd = [];   //홀수 저장용 배열
let even = [];  //짝수 저장용 배열

//홀수는 odd에 짝수는 even에 분류하여 저장하기
for(let item of b) {          //b에있는걸 가져와서 item에 넣는다.
    if(item % 2 == 0)           //가져온 원소가 짝수이면
        even.push(item);    //even에 저장
    else 
        odd.push(item);
}          
       
//출력 결과 확인하기.
console.log(odd);
console.log(even);

