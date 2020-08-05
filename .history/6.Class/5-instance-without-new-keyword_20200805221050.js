class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}

const johnCar = Car("Honda", "Red");

/* error:
TypeError: Class constructor Car cannot be invoked without 'new'
*/