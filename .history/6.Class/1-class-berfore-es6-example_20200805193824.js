/**
 * Dalam paradigma Object-Oriented Programming (OOP), class merupakan sebuah
blueprint yang dapat dikembangkan untuk membuat sebuah objek. Blueprint ini
merupakan sebuah template yang di dalamnya menjelaskan seperti apa perilaku
dari objek itu (berupa properti ataupun method).
 */
/**
 * Paradigma OOP selalu digambarkan dengan kehidupan nyata. Dalam
OOP blueprint tersebut dikenal dengan class (kelas), nilai yang dimiliki olehnya
dikenal dengan properti, kemampuan yang dimilikinya dikenal sebagai
behaviour/method dan realisasi dari sebuah blueprint tersebut disebut instance.
 */
/**
 * Jika berbicara mengenai blueprint, JavaScript memiliki konsep untuk membuatnya
tanpa melalui class. Konsep tersebut adalah prototype .
 */
/**
 * Sebelum ES6, Hal yang paling mendekati dengan class yaitu membuat sebuah
objek menggunakan constructor function dan keyword new , lalu untuk
menambahkan method kita gunakan konsep prototype .
 */
/**
 * ika kita menyimpan method pada constructor maka method
tersebut akan selalu dibuat ketika instance dibuat. Ini bukan pendekatan yang
baik karena jika method memiliki kode yang banyak, maka akan memakan
memori yang banyak.
Sedangkan jika menggunakan prototype, method hanya dibuat satu kali. Dan
method tersebut diwarisi kepada setiap instance yang dibuat
 */
function Car(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
}


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
/**
 * 
 */

/* output: 
Mobil dinyalakan...
Manufacture: Honda
Color: Red
Engines: Active
*/