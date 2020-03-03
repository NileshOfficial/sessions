// Q3. Explain difference between Bind and Call (example).


// call example
let person = {
    name: "Nilesh",
    age: 21
};

console.log("call example")

/**
 * this function prints person details
 * @param {Number} employeeId 
 */
function logPersonDetails(employeeId) {
    console.log(this.name);
    console.log(this.age);
    console.log(employeeId);
}
/*
.call provides a context to this and will call logPersonDetails immediately.
 */
logPersonDetails.call(person, 4076);

console.log("\n");
logPersonDetails(4076); // but call doesn't attach the context permanently.


// bind example
console.log("\n\n");
console.log("bind example");

/**
 * this function prints a person's details.
 * @param {Number} employeeId 
 */
function logPersonDetailsWithBind(employeeId) {
    console.log(this.name);
    console.log(this.age);
    console.log(employeeId);
}

/*
bind returns a new function with attached context and may also bind the function arguements, 
and will not call the function.
but they won't change afterwards even if new function is called with different args.
thus it is better not to bind arguements and call the new function with some argument.
 */
let logPersonDetailsBounded = logPersonDetailsWithBind.bind(person, 4076);
logPersonDetailsBounded(); // will print 4076 as employee id.
console.log("\n");

logPersonDetailsBounded(436); // will still print 4076 as employee id.