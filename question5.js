// Q5. Create a function which returns number of invocations and number of instances of a function.

function invocationAndInstanceCounter() {
    if(invocationAndInstanceCounter.prototype.invocations)
        invocationAndInstanceCounter.prototype.invocations += 1;
    else invocationAndInstanceCounter.prototype.invocations = 1;
    console.log("invocation count:", invocationAndInstanceCounter.prototype.invocations);

    this.objectInstance = 10;
}

invocationAndInstanceCounter.prototype.constructor = function() {
    if(invocationAndInstanceCounter.prototype.instances)
        invocationAndInstanceCounter.prototype.instances += 1;
    else invocationAndInstanceCounter.prototype.instances = 1;
    console.log(invocationAndInstanceCounter.prototype.instances);
};

new invocationAndInstanceCounter();

// for(let i = 0; i < 10; ++i)
//     invocationAndInstanceCounter();

console.log(invocationAndInstanceCounter.prototype.instances);
