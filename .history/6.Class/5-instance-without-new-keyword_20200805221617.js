/**
 * /*Pembuatan class menggunakan ES6 lebih ketat dibandingkan dengan constructor
function, di mana dalam pembuatan instance wajib menggunakan keyword new .
Jika kita tidak menuliskannya, maka akan terjadi error*/
 */
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