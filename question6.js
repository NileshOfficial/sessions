// Q6. Create a counter using closures.

function counterWrapper () {
    let counter = 0;
    return function() { return counter++; }
};

let counting = counterWrapper();

console.log(counting());
console.log(counting());
console.log(counting());
console.log(counting());