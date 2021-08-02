let a = [[1], [2], [3]];
a[0]=[0]
let b = [...a];
// a[0]=[0]

console.log('*************************1**********************************')
console.log(a)
console.log(b)
console.log("\n")

console.log('***************************2********************************')
b.shift().shift();
console.log(a)  //[ [], [ 2 ], [ 3 ] ]
console.log(b)  //[ [ 2 ], [ 3 ] ]
