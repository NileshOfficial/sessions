// Explain 5 array methods with example.

let arr = [1,2,3,4,5,6,7,8,9];

// array.push will add a value to array at end;
console.log("push demonstration");
arr.push(10)
console.log(arr);
console.log("\n\n");

// array.pop will remove a value from array at end;
console.log("pop demonstration");
arr.pop();
console.log(arr);
console.log("\n\n");

// array.indexOf() returns index of an element in array if element doesn't exist it returns -1;
console.log("indexOf demonstration");
console.log(arr.indexOf(5));
console.log(arr.indexOf(43));
console.log("\n\n");

// array.map returns a new array after applying the callback to each element;
console.log("map demonstration");
let mappedArr = arr.map(ele => ele*2);

console.log(mappedArr);
console.log("\n\n");

// array.filter returns a filtered array that selects the value based on the callback.
console.log("filter demonstration");
let filteredValue = arr.filter(ele => ele%2 === 0);
console.log(filteredValue);
console.log("\n\n");
