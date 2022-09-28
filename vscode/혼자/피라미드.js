// for(let i = 1; i < 10; i++){
//     for(let x = 0; x < i; x++){
//         process.stdout.write("*")
//     }
//     console.log("");
// }

for(let i = 1; i < 15; i++){
    for(let j = 15; j > i; j--){
        process.stdout.write(" ");
    }
    for(let k = 0; k < 2 * i - 1; k++){
        process.stdout.write("*");
    }
    console.log();
}