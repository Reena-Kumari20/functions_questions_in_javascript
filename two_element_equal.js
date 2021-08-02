// let array = [1,2,3,9,10]
// The sum of the two elements is equal to 12
// Return an array of that element

let array = [1,2,3,9,10]
let a=[]
for (let i=0;i<array.length;i++){
    let b=[]
    for (let j=1;j<array.length;j++){
        if (array[i]+array[j]==13){
            b.push(array[i])
            b.push(array[j])
            a.push(b) 
        }  
    } 
}
console.log(a)
