/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5*/

(function (str){
    let c=0;
    for (let i=0;i<str.length;i++){
        if (str[i]=='a' || str[i]=='i' || str[i]=='e' || str[i]=='o' || str[i]=='u'){
            c=c+1
        }
    }
    console.log(c)
})('The quick brown fox')