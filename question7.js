// 7. Write a program to flatten a nested array to single level using arrow functions.

const flattenService = (toBeFlattened, flattened) => {
    if(Array.isArray(toBeFlattened))
        toBeFlattened.forEach(ele => flattenService(ele, flattened));
    else flattened.push(toBeFlattened);
}

const flatten = arr => {
    let flattened = [];
    arr.forEach(ele => flattenService(ele, flattened));
    return flattened;
}

let nested = [1, 2, [3, 4, [5, 6]]];

console.log( flatten(nested) );