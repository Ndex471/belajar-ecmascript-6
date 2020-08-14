/**
 * perlu membuat sebuah modul
JavaScript. Apa tujuannya? Tak lain untuk menghubungkan berkas JavaScript
yang terpisah agar dapat saling digunakan satu sama lain.
 
Menggunakan tag <script> memang simpel, namun urutan dari penulisan tag
tersebut merupakan hal yang vital. Karena app.js tidak akan bekerja jikadituliskan di atas main.js , karena app.js membutuhkan kode main.js tersedia
terlebih dahulu.

JavaScript module bersifat
reusable sehingga dapat digunakan pada banyak aplikasi yang kita buat.

module bekerja dengan cara exporting atau
importing nilai baik itu variabel, fungsi, array, objek ataupun class agar dapat
digunakan pada berkas JavaScript lain.

Dalam satu berkas JavaScript terdiri dari
satu module, dan di dalamnya kita dapat melakukan export lebih dari satu nilai.
Dalam environment Node.js, untuk melakukan import dan export module kita
gunakan module.exports . Setiap berkas JavaScript yang berjalan pada Node,
memiliki objek module lokal yang memiliki properti exports. Properti tersebut
digunakan untuk mendefinisikan nilai apa yang akan diekspor dari berkas
tersebut.

Kode module.exports = coffeeStock membuat object co eeStock diterapkan
sebagai nilai dari module.exports . Di mana nanti nilai properti exports ini akan
digunakan (import) pada berkas JavaScript lain.
Jika mencoba melihat nilai module yang ada pada berkas state.js dengan
menambahkan kode console.log(module) di akhir berkasnya. Maka kita akan
melihat objek coffeeStock menjadi nilai dari properti exports .

untuk melakukan import atau menggunakan objek
yang sudah di-export pada berkas lain? Caranya adalah dengan menggunakan
method require()
*/
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

module.exports = coffeeStock;