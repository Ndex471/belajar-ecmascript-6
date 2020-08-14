/**
 *Named export digunakan untuk mengekspor banyak nilai dalam berkas
JavaScript. Cara kerjanya mirip seperti pada Node.js. Nilai yang akan diekspor
dituliskan di dalam objek literals, 

Lalu untuk mendapatkan nilai yang diekspor menggunakan named export, kita
gunakan teknik destructuring object.

Karena named import menggunakan teknik destructuring object untuk
mendapatkan nilainya, maka pastikan penamaan variabel sesuai dengan nama
variabel yang diekspor. Jika terjadi kesalahan penulisan

Namun jika kita tetap ingin mengubah penamaan variabel dari named import,
kita bisa melakukannya dengan menambahkan keyword as setelah penamaan
variabelnya.

Setelah kita berhasil mendapatkan nilai yang diekspor, kita dapat menggunakan
nilainya layaknya variabel lokal biasa
 */
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMakerReady = true;

export { coffeeStock, isCoffeeMakerReady };