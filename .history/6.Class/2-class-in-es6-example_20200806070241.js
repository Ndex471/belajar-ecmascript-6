/**
 * class pada ES6 hanya sebuah syntactic
sugar dari konsep prototype yang sudah ada.
 */
/**
 * “Ketika kita hendak membuat sebuah constructor function ataupun class. Secara
code convention (aturan penulisan), gunakan CamelCase dalam penamaannya.
Contohnya Car daripada car , SportCar daripada sportCar atau Sportcar ”
 */
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