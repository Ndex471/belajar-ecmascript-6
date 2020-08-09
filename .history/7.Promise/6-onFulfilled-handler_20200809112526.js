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

/**
 * makeCo ee merupakan objek promise yang akan menghasilkan resolve()
dengan membawa nilai ‘Kopi berhasil dibuat’.
● Lalu kita mendeklarasikan fungsi handlerSuccess() yang mencetak nilai
dari parameternya.
● Kemudian kita memanggil method .then() dari makeCo ee dan
memberikan handlerSuccess sebagai parameternya.
● Ketika makeCo ee terpenuhi (fulfilled), maka handlerSuccess() akan
terpanggil dengan parameter nilai yang dibawa oleh resolve() . Sehingga
output akan menghasilkan “Kopi berhasil dibuat”.
Namun bagaimana jika objek promise menghasilkan kondisi rejected? Bagaimana
cara menangani nilai yang dikirimkan oleh reject() ?
Kita dapat menyimpan kedua handle callback baik onFulfilled atau onRejected
pada parameter method .then() , yang perlu kita perhatikan adalah pastikan
handle callback untuk onFulfilled disimpan pada parameter pertama seperti ini:
1. makeCoffee.then(handlerSuccess, handlerRejected);
Dengan begitu kita tetap dapat menangani objek promise meskipun dalamkondisi rejected.
 */