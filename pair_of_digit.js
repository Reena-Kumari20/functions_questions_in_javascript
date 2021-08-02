let arr=[];
(function (array){
  let i=0
  while (i<array.length-1){
    let j=array[i]+array[i+1]
    arr.push(j)
    i=i+2
  }
})(['1','2','3','4','5','6'])
console.log(arr)