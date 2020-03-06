//4. Write a program to implement a class having static functions

class instanceCounter {
    constructor() {
        if(instanceCounter.instances) instanceCounter.instances += 1;
        else instanceCounter.instances = 1;
    }

    static getInstanceCount() {
        return instanceCounter.instances;
    }
}

let i1 = new instanceCounter();
let i2 = new instanceCounter();
let i3 = new instanceCounter();
let i4 = new instanceCounter();
let i5 = new instanceCounter();

console.log(instanceCounter.getInstanceCount());