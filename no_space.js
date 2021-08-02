//with mamed function
function nospace(str1){
    str2=str1.split(' ').join('');
    return str2
}
console.log(nospace(' ijsjoiaj aoisuoiaus iyeoiye   oiwy'))

// with self invoked function

;(function (str3){
    str4=str3.split(' ').join('');
    console.log(str4)
})('ioioooi wtyuqtwuyq  70928091 iwoiqueo');