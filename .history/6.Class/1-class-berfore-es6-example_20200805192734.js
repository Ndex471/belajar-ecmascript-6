/**
 * Dalam paradigma Object-Oriented Programming (OOP), class merupakan sebuah
blueprint yang dapat dikembangkan untuk membuat sebuah objek. Blueprint ini
merupakan sebuah template yang di dalamnya menjelaskan seperti apa perilaku
dari objek itu (berupa properti ataupun method).
 */

function Car(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
}
/** */

Car.prototype.startEngines = function () {
    console.log('Mobil dinyalakan...');
    this.enginesActive = true;
};

Car.prototype.info = function () {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
}

var johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();

/* output: 
Mobil dinyalakan...
Manufacture: Honda
Color: Red
Engines: Active
*/