/**
 * Kita juga dapat membuat banyak instance dari class yang sama, dan tentunya
objek yang kita buat memiliki karakteristik (properti dan method) yang sama.
Walaupun sama, namun nilai dari propertinya bersifat unik atau bisa saja
berbeda.
 */
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}

const johnCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");
/**
 * Variabel johnCar dan adamCar merupakan sebuah objek dari Car . Tentu
keduanya akan memiliki properti manufacture , color , dan enginesActive . Namun
pada output kita melihat bahwa nilai dari properti kedua objek tersebut berbeda,
karena kita dapat memberikan nilai yang berbeda pada saat objeknya dibuat.
 */
console.log(johnCar.manufacture);
console.log(adamCar.manufacture);

/* output:
Honda
Tesla
*/