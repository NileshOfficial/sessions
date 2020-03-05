// Q5. Create a function which returns number of invocations and number of instances of a function.

invocationAndInstanceCounter.instances = 0;
invocationAndInstanceCounter.invocations = 0;
function invocationAndInstanceCounter() {
    if (this instanceof invocationAndInstanceCounter) {
        invocationAndInstanceCounter.instances += 1;
    } else { 
        invocationAndInstanceCounter.invocations += 1;
    }
    
    console.log(
        `invocations: ${invocationAndInstanceCounter.invocations} \t instances: ${invocationAndInstanceCounter.instances}`
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