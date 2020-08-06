/**
 * Dalam analogi dunia nyata, ketika kendaraan mengalami kerusakan maka
kendaraan tersebut akan diperbaiki di bengkel (factory), sehingga kita perlu
membuat class baru yang berperan sebagai factory, sebutlah class tersebut
VehicleFactory . Di dalam kelas VehicleFactory terdapat satu method repair()
yang dapat menerima banyak kendaraan sebagai parameternya
 */

/**
 * Untuk mengakses method dari class, sejauh ini kita perlu membuat instance dari
classnya terlebih dahulu. Sehingga untuk memanggil repair() , kita perlu membuat
instance dari class VehicleFactory
 */

/*Kode tersebut berjalan sesuai harapan namun tidak efektif. Mengapa? Karena
kita perlu membuat instance untuk sekedar memanggil satu fungsi dari class-nya
tersebut. Membuat instance adalah membuat sebuah objek baru yang terbentuk
melalui blueprint sehingga membutuhkan memori ekstra. Jika kita dapat
mengakses method tersebut tanpa melalui instance mengapa tidak? Pada kasus
inilah kita membutuhkan sebuah static method. Static method merupakan
method yang tidak dapat dipanggil oleh instance dari class, namun dapat
dipanggil melalui class-nya sendiri.
Pada ES6 class kita dapat membuat static method dengan menambahkan
keyword static sebelum deklarasi method-nya*/

/*Kemudian untuk memanggil methodnya kita bisa panggil melalui class
VehicleFactory kemudian repair()*/

class Vehicle {
   constructor(licensePlate, manufacture) {
      this.licensePlate = licensePlate;
      this.manufacture = manufacture;
      this.engineActive = false;
   }

   /*
   kode lainnya
   */
}

class VehicleFactory {
   /* method static dapat di akses melalui class-nya langsung */
   repair(vehicles) {
      vehicles.forEach(vehicle => {
         console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
      })
   }
}

class Car extends Vehicle {
   constructor(licensePlate, manufacture, wheel) {
      super(licensePlate, manufacture);
      this.wheel = wheel;
   }

   /*
   kode lainnya
   */
}

class Motorcycle extends Vehicle {
   constructor(licensePlate, manufacture, wheel) {
      super(licensePlate, manufacture);
      this.wheel = wheel;
   }

   /*
   kode lainnya
   */
}

const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);

/* Pemanggilan method repair langsung dari class-nya */
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);

/* output:
Kendaraan H121S sedang melakukan perawatan
Kendaraan GF121J sedang melakukan perawatan
Kendaraan TA1408K sedang melakukan perawatan
*/