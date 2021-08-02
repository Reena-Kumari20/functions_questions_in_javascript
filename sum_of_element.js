// with named function
function sum(arr1){
    let sum=0;
    for (let i=0;i<arr1.length;i++){
        sum=sum+parseInt(arr1[i])
    }
    return sum
}
let a=[1,2,3,4,5]
console.log(sum(a))

// with self invoked function
;(function (arr2){
    let sum=0;
    for (let j=0;j<arr2.length;j++){
        sum=sum+parseInt(arr2[j])
    }
    console.log(sum)
})([1,2,'4',8,9,'4',7,5,'1']);