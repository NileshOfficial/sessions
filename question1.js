// Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

let arr = [3,62,234,7,23,74,23,76,92];

function gt70(array) {
    let filtered = array.filter(ele => ele > 70 ? true : false);
    return filtered;
}

console.log(gt70(arr));