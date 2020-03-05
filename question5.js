// Q5. Create a function which returns number of invocations and number of instances of a function.

function invocationAndInstanceCounter() {
    if (invocationAndInstanceCounter.prototype.invocations)
        invocationAndInstanceCounter.prototype.invocations += 1;
    else invocationAndInstanceCounter.prototype.invocations = 1;

    if (!invocationAndInstanceCounter.prototype.instances)
        invocationAndInstanceCounter.prototype.instances = 0;

    if (!(this === window))
        invocationAndInstanceCounter.prototype.instances += 1;

    console.log(
        `invocations: ${invocationAndInstanceCounter.prototype.invocations} \t instances: ${invocationAndInstanceCounter.prototype.instances}`
    );
}

invocationAndInstanceCounter();
new invocationAndInstanceCounter();
invocationAndInstanceCounter();
new invocationAndInstanceCounter();
invocationAndInstanceCounter();
new invocationAndInstanceCounter();
invocationAndInstanceCounter();
new invocationAndInstanceCounter();
invocationAndInstanceCounter();
new invocationAndInstanceCounter();