/**
*class Car , Motorcycle , Plane , dan Helicopter
memiliki banyak properti yang sama seperti lisencePlate , manufacture , dan
engineActive . Kemudian memiliki beberapa method yang sama seperti
startEngines() , info() , dan parking() .
 */
/**
 * Tidak ada masalah dengan kode tersebut, tetapi jika kita akan membuat kelas lainnya seperti Motorcycle, Plane, dan Helicopter maka kita harus menuliskan properti dan method yang sama secara berulang. 

Dengan teknik inheritance, kita bisa mengelompokkan properti dan method yang sama. Caranya dengan membuat sebuah kelas baru yang nantinya akan diturunkan sifatnya pada class lain:
 */
/**
 * Ketika class Vehicle telah dibuat, kelas lainnya dapat melakukan extends pada kelas tersebut untuk mewarisi sifatnya. Dalam pewarisan, class Vehicle dapat disebut sebagai super atau parent class. Kelas yang mewarisi sifat dari parent class disebut dengan child class.

Pada JavaScript jika kita ingin mewariskan sifat class, lakukan dengan keyword extends
 */
/**
 * kita buat class Vehicle yang nantinya akan kita gunakan sebagai parent class.
 */
/**
 * Dengan begitu selain properti dan method yang terdapat di dalamnya, class Car
juga dapat mengakses seluruh properti dan method yang terdapat pada class
Vehicle .
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