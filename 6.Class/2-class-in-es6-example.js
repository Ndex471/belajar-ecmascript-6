class Car {
    
    // Sama seperti function constructor
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
    
    // Sama seperti Car.prototype.startEngine
    startEngines() {
        console.log('Mobil dinyalakan...');
        this.enginesActive = true;
    }
    
    // Sama seperti car.prototype.info
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color:  ${this.color}`);
        console.log(`Engines: ${this.engine ? "Active" : "Inactive"}`);
    }
    
}


const johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();

/* output: 
Mobil dinyalakan...
Manufacture: Honda
Color: Red
engines active: Inactive
*/