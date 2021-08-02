//reverse with named function
function reverseStr(str) {
    let reversestr = '';
    for(let i = str.length-1;i>=0; i--) {
      reversestr += str[i];
    }
    return reversestr;
}
console.log(reverseStr("w3resources"))  //secruoser3w



//reverse with self invoked function
;(function (str1){
    let reversestr = '';
    for(let j = str1.length-1;j>=0; j--) {
      reversestr += str1[j];
    }
    console.log(reversestr); //loohcs3w
})('w3school');