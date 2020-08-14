/**
 * Sebenarnya nilai yang diekspor tetaplah satu, namun jika terdapat kasus di mana kita ingin mengekspor lebih dari satu nilai, kita dapat memanfaatkan objek literals { }. Contohnya, mari kita tambahkan variabel isCoffeeMakerReady
 */
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMakerReady = true;

module.exports = { coffeeStock, isCoffeeMakerReady };
/**
 * untuk mengeksport kedua nilai (coffeeStock, isCoffeeMakerReady) dengan memanfaatkan objek literal
 */