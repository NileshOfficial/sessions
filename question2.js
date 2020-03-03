// Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.

let arr = [1, 2, 3, 4, 5];
let itr = 0;

let handle = setInterval(() => {
    console.log(arr[itr]);
    itr++;
    if (itr === arr.length)
        clearInterval(handle);
}, 3000);