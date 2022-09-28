// function gugudan(){
// for(let i = 1; i <=9; i++){
//     console.log(`3 * ${i} = ${3*i}`)
// }
// }
// gugudan();

function sayHello(name){
    let msg = `Hello`;
    if(name){
        msg = `Hello, ${name}`;
    }
    console.log(msg);
}

sayHello();
sayHello(`hun`);