/**
 * perlu membuat sebuah modul
JavaScript. Apa tujuannya? Tak lain untuk menghubungkan berkas JavaScript
yang terpisah agar dapat saling digunakan satu sama lain.
 
Menggunakan tag <script> memang simpel, namun urutan dari penulisan tag
tersebut merupakan hal yang vital. Karena app.js tidak akan bekerja jikadituliskan di atas main.js , karena app.js membutuhkan kode main.js tersedia
terlebih dahulu.


*/
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

module.exports = coffeeStock;