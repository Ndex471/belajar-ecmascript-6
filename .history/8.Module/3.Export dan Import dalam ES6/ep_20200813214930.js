/**
 * Sebelum adanya fitur ini, kita hanya menggunakan tag <script> pada HTML untuk
menggunakan berkas JavaScript. Semakin banyak berkas JavaScript yang
digunakan, semakin banyak pula tag <script> dituliskan. Nah, dengan
menggunakan fitur export dan import, kita cukup menggunakan satu tag <script>
yang merupakan berkas JavaScript utama (biasanya diberi nama main.js , app.js ,atau index.js ).

Pada saat ini, fitur ES6 module standarnya tidak diaktifkan pada browser. Namun
kita dapat mengaktifkan fitur ini dengan mudah, yakni dengan menambahkan
attribute type=”module” pada tag <script> yang kita gunakan.
1. <script src="app.js" type="module"></script>
Tidak seluruh browser dapat mengaktifkan fitur tersebut. Tapi jangan khawatir,
setidaknya browser yang banyak digunakan sekarang sudah mendukung fitur
ES6 Modules.

Pada ES6 module, jika kita hanya mengekspor satu nilai pada
sebuah berkas JavaScript baik itu primitive value, function, array, object ataupun
class, kita gunakan keyword export default
 */

/**
 * untuk mengimpor nilainya? Kita dapat melakukannya
dengan menggunakan keyword import ... from

Berbeda dengan gaya Node.js, kita gunakan keyword import untuk
menggantikan const , let , ataupun var dalam mendeklarasi variabel yang diimpor.
Lalu di sana juga kita menggunakan from dalam menspesifikasikan lokasi berkas
JavaScript-nya.
Ketika menggunakan export default , kita dapat menggunakan penamaan apa
saja ketika mendeklarasikan variabel dalam mengimpor nilainya


 */
 import coffeeStock from "./state.js";

const displayStock = stock => {
    const coffeeStockListElement = document.querySelector("#coffee-stock-list");
    for (const type in stock) {
        const coffeeStockItemElement = document.createElement("li");
        coffeeStockItemElement.innerText = `${type}: ${stock[type]}`;
        coffeeStockListElement.appendChild(coffeeStockItemElement);
    }
}

displayStock(coffeeStock);