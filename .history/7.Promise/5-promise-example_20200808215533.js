/**
 * Dari output yang dihasilkan baik ketika fulfilled ataupun rejected masih berupa
Promise , bukan nilai yang dibawa oleh fungsi resolve atau reject itu sendiri.
Lantas bagaimana cara untuk mengakses nilai yang dibawa oleh fungsi-fungsi
tersebut? Caranya adalah dengan menggunakan method .then() yang tersedia
pada objek Promise.
 */
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!")
  }
}

const makeCoffee = new Promise(executorFunction);
console.log(makeCoffee);

/* output:
Promise { 'Kopi berhasil dibuat' }
*/