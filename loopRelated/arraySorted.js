var arr = [9, 2, 3, 4, 5, 7];
var isSorted = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        isSorted = false;
        break;
    }
}
console.log(isSorted);