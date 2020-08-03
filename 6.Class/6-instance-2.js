class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}

const johnCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");

console.log(johnCar.manufacture);
console.log(adamCar.manufacture);

/* output:
Honda
Tesla
*/