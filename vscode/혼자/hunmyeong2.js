b = [1, 5, 41, 4315, 5324, 132, 5132, 432];

// for(let a of b){
//     console.log(a);
// }

for(let index in b){
    if(index % 2 == 0){
        console.log(index);
    }
}