var check = "hello how are you";
var count1 = 0;
var count2 = 0;
var vowel = 'aeiou';
var consonent ="bcdfghjklmnpqrstvwxyz";

for (i=0; i < check.length; i++){
    if(vowel.includes(check[i])){
        count1++;
    }
    else if(consonent.includes(check[i])){
        count2++;
    }
}
console.log("In this line total vowel is " + count1+ "and total consonent is" + count2)


