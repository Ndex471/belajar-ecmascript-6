/**
 * Untuk menangani nilai yang dikirimkan oleh resolve() ketika Promise onFulfilled,
kita gunakan method .then() pada objek promise yang kita buat. Lalu di dalam
method .then() kita berikan parameter berupa function yang berguna sebagai
handle callback


 */
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!")
  }
}

const handlerSuccess = resolvedValue => {
  console.log(resolvedValue);
}

const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess)

/* output:
Kopi berhasil dibuat
*/