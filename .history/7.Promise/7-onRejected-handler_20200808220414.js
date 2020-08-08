/**
 * Namun bagaimana jika objek promise menghasilkan kondisi rejected? Bagaimana
cara menangani nilai yang dikirimkan oleh reject() ?
Kita dapat menyimpan kedua handle callback baik onFulfilled atau onRejected
pada parameter method .then() , yang perlu kita perhatikan adalah pastikan
handle callback untuk onFulfilled disimpan pada parameter pertama seperti ini:
1. makeCoffee.then(handlerSuccess, handlerRejected);
Dengan begitu kita tetap dapat menangani objek promise meskipun dalamkondisi rejected.
 */
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!")
  }
}

const handlerSuccess = coffee => {
  console.log(coffee);
}

const handlerRejected = rejectionReason => {
  console.log(rejectionReason)
}

const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess, handlerRejected);

/* output:
Mesin Kopi tidak bisa digunakan!
*/