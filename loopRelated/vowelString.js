var check = "satyam kumar singh sonpur";
var count = 0;
var vowel = 'aeiouAEIOU';


for (i=0; i <check.length; i++){
    if(vowel.includes(check[i]) ){
      count ++;
    }
}
console.log(count) 