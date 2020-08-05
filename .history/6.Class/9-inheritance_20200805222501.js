/**
 * Pada bagan di atas kita dapat lihat class Car , Motorcycle , Plane , dan Helicopter
memiliki banyak properti yang sama seperti lisencePlate , manufacture , dan
engineActive . Kemudian memiliki beberapa method yang sama seperti
startEngines() , info() , dan parking() .
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
 
 const car = new Car("H121S", "Honda", 4);
 car.startEngines();
 
 /* output:
 Mesin kendaraan H121S dinyalakan!
 */