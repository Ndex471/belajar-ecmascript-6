/**
 *Named export digunakan untuk mengekspor banyak nilai dalam berkas
JavaScript. Cara kerjanya mirip seperti pada Node.js. Nilai yang akan diekspor
dituliskan di dalam objek literals, 

Lalu untuk mendapatkan nilai yang diekspor menggunakan named export, kita
gunakan teknik destructuring object.

Karena named import menggunakan teknik destructuring object untuk
mendapatkan nilainya, maka pastikan penamaan variabel sesuai dengan nama
variabel yang diekspor. Jika terjadi kesalahan penulisan


 */
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMakerReady = true;

export { coffeeStock, isCoffeeMakerReady };