/**
 * Deklarasi class menggunakan ES6 memiliki sifat yang sama seperti pembuatan
class menggunakan function constructor (seperti contoh sebelumnya). Namun
alih-alih menggunakan function constructor dalam menginisialisasi propertinya,
class ini memisahkan constructornya dan ditempatkan pada body class
menggunakan method spesial yang dinamakan constructor .
 */
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}