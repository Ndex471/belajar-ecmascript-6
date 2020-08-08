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