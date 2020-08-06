/**
 * Pada bagan di atas kita dapat lihat class Car , Motorcycle , Plane , dan Helicopter
memiliki banyak properti yang sama seperti lisencePlate , manufacture , dan
engineActive . Kemudian memiliki beberapa method yang sama seperti
startEngines() , info() , dan parking() .
 */

/**
 * Dengan begitu selain properti dan method yang terdapat di dalamnya, class Car
juga dapat mengakses seluruh properti dan method yang terdapat pada class
Vehicle .
 */
/**
 * pada constructor class Car , kita melihat penggunaan super() , apa itu
maksudnya? Keyword super digunakan untuk mengakses properti dan method
yang ada pada induk class ketika berada pada child class. Jadi
super(lisencePlate, manufacture) di atas berarti kita mengakses constructor dari
parent class dan mengirimkan lisencePlate , dan manufacture sebagai data yang
dibutuhkan olehnya agar objek (instance) Car berhasil dibuat.
Penggunaan super sangat berguna ketika kita hendak menjalankan method
overriding pada method parent. Contohnya kita akan melakukan method
overriding pada method info() dengan menambahkan informasi jumlah roda
pada mobil
 */
class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
   
    startEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }
   
    info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
    }
   
    parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
 }
 
 class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }
 
    droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju!`);
    }
 
    openDoor() {
    console.log(`Membuka pintu!`);
    }
 }
 /**
  * Dalam melakukan pewarisan kelas, tidak ada tingkatan yang membatasinya.
Maksudnya, kita dapat mewariskan sifat kelas A pada kelas B, lalu kelas B
mewarisi sifatnya kembali pada kelas C dan selanjutnya. Sama halnya dengan
Nenek kita mewarisi sifatnya kepada orang tua kita kemudian orang tua kita
mewarisi sifatnya kepada kita.
  */
 
 const car = new Car("H121S", "Honda", 4);
 car.startEngines();
 
 /* output:
 Mesin kendaraan H121S dinyalakan!
 */