/*
    함수 개념 연습
    2022.9.28
*/

function doubleX(n) {
    return n * 2;
}
//------------------------------------
//square(n) : n을 제곱한 값을 반환하는 함수
function square(n) {
    return n * n;   //n**2 제곱함수
}
//------------------------------------
function average(a, b) {    //a와 b값을 받아 두 개의 평균을 리턴해라.
    return (a+b) / 2;
}
//------------------------------------
function sayHello(name) {
    console.log("안녕하세요!" + name + "씨");
}

function abc(name) {
    console.log(`안녕하세요 ${name}씨`);
}


function tagString(tag, text) {
    console.log(`<${tag}> ${text} </${tag}>`);
}




//함수호출
console.log(`${doubleX(5)}`);
console.log(doubleX(100));
console.log(square(100));
console.log(average(50,113));
sayHello("아이");
abc("훈명")     //문자열 " "

tagString("h1", "java");
