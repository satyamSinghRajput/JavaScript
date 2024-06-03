var num = [10,13,12,14,5];
var max = num[0];

for (i=0; i<num.length; i++){
    // console.log(num[i])
    if(num[i]>max){
        max = num[i]
    }
}
console.log(max)