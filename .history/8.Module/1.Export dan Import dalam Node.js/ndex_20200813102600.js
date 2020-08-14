/**
 * Dalam inisialisasi variabel co eeStock (nama variabel bebas kita tentu), kita
gunakan method require() dengan memberikan parameter lokasi dari berkas
state.js . Dengan begitu variabel co eeStock akan memiliki nilai module.exports
yang sama pada berkas state.js . Setelah mendapatkan nilainya, kita bebas
menggunakannya layaknya variabel lokal pada biasanya.
 */
const coffeeStock = require('./stet.js');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!")
    } else {
        console.log("Biji kopi habis!")
    }
}

makeCoffee("robusta", 80);

/* output:
Kopi berhasil dibuat!
*/