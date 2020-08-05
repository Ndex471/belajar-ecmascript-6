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
/**
 * Paradigma OOP selalu digambarkan dengan kehidupan nyata. Visualisasi di atas
mencontohkan gambaran umum OOP di mana terdapat sebuah blueprint kucing,
nilai yang dimiliki kucing, dan kemampuan yang dapat dilakukan olehnya. Dalam
OOP blueprint tersebut dikenal dengan class (kelas), nilai yang dimiliki olehnya
dikenal dengan properti, kemampuan yang dimilikinya dikenal sebagai
behaviour/method dan realisasi dari sebuah blueprint tersebut disebut instance.
 */

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