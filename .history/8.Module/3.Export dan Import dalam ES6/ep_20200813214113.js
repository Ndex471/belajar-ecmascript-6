/**
 * Sebelum adanya fitur ini, kita hanya menggunakan tag <script> pada HTML untuk
menggunakan berkas JavaScript. Semakin banyak berkas JavaScript yang
digunakan, semakin banyak pula tag <script> dituliskan. Nah, dengan
menggunakan fitur export dan import, kita cukup menggunakan satu tag <script>
yang merupakan berkas JavaScript utama (biasanya diberi nama main.js , app.js ,atau index.js ).


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