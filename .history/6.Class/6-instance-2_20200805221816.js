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
 * 
 */
console.log(johnCar.manufacture);
console.log(adamCar.manufacture);

/* output:
Honda
Tesla
*/