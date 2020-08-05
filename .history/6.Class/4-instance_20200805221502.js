/**
 * Instance merupakan objek yang memiliki properti dan method yang telah ditentukan oleh
blueprint-nya (class), atau singkatnya adalah objek yang merupakan hasil
realisasi dari sebuah blueprint.
 */
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}

const johnCar = new Car("Honda", "Red");
/*Pembuatan class menggunakan ES6 lebih ketat dibandingkan dengan constructor
function, di mana dalam pembuatan instance wajib menggunakan keyword new .
Jika kita tidak menuliskannya, maka akan terjadi error