// Q4. Explain 3 properties of argument object.


/**
 * this function demonstrates arguments length and subscripting.
 */
function min() {
    let minVal = 1 / 0;
    // length property gives the number of arguements passed.
    console.log("number of numbers to be compared: ", arguments.length, "\n");

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minVal)
            minVal = arguments[i]; // arguments iterator
    }

    console.log("min value is", minVal, "\n\n");
}

min(0, -1, 4, 5, -32);

// demonstrating arguments callee property.
// arguments callee property is the reference to the function argument object belongs to.
// useful in this case of anonymous recursive function, since recursive function need name of the
// function.
console.log("callee property demonstration: ", function (n) {
    if(n === 0) return 1;
    return n * arguments.callee(n - 1);
}(5));