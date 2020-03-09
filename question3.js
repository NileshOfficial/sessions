//3. Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.

class vehicle {
    // engine = "v4";
    // wheels = 4;
    constructor(wheels, engine) {
        this.wheels = wheels;
        this.engine = engine;
    }
}

class car extends vehicle{
    // transmission = "manual";
    constructor(wheelCount, engineType, transmission) {
        super(wheelCount, engineType);
        this.transmission = transmission;
    }
}

class nissan extends car {
    // model = "GT";
    constructor(wheelCount, engineType, transmission, model) {
        super(wheelCount, engineType, transmission);
        this.model = model;
    }

    getCarInfo = () => {
        return {
            wheels: this.wheels,
            engine: this.engine,
            transmission: this.transmission,
            model: this.model
        };
    }
}

// let gtModel = new nissan();
let gtrModel = new nissan(4, "v8", "automatic", "GT-R");
// console.log(gtModel.getCarInfo());
console.log(gtrModel.getCarInfo());