/PPada bagan di atas kita dapat lihat class Car , Motorcycle , Plane , dan Helicopter
memiliki banyak properti yang sama seperti lisencePlate , manufacture , dan
engineActive . Kemudian memiliki beberapa method yang sama seperti
startEngines() , info() , dan parking() .*hoop
class Vehicle {*/
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
 
    /* overriding method info dari parent class */
    info() {
      super.info();
      console.log(`Jumlah roda: ${this.wheels}`);
    }
 }
 
 const johnCar = new Car("H121S", "Honda", 4);
 johnCar.info();
 
 /* output:
 Nomor Kendaraan: H121S
 Manufacture: Honda
 Mesin: Inactive
 Jumlah roda: 4
 */