/**
 * Dalam inisialisasi variabel co eeStock (nama variabel bebas kita tentu), kita
gunakan method require() dengan memberikan parameter lokasi dari berkas
state.js . Dengan begitu variabel co eeStock akan memiliki nilai module.exports
yang sama pada berkas state.js . Setelah mendapatkan nilainya, kita bebas
menggunakannya layaknya variabel lokal pada biasanya.

“Tips dalam memberikan lokasi pada method require() : Jika kita gunakan lokasi
yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan ./ .
Contohnya, berkas index.js dan state.js berada pada folder yang sama, maka
kita cukup menuliskannya dengan ./state.js .”
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