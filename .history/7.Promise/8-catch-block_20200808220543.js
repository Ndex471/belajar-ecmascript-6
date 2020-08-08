/**
 * Salah satu cara menulis kode yang baik adalah mengikuti prinsip yang disebut
separation of concerns yang artinya pemisahan masalah. Pemisahan masalah
berarti mengorganisasikan kode ke dalam bagian-bagian yang berbeda
berdasarkan tugas tertentu. Hal ini akan memudahkan kita kelak mencari kode
yang salah jika aplikasi tidak bekerja dengan baik.
Perlu diketahui bahwa method .then() akan mengembalikan nilai promise yang
sama dengan ketika objek promise itu dipanggil. Melalui sifatnya ini, daripada kita
menetapkan logika resolve dan reject pada satu method .then() , kita dapat
memisahkan kedua logika tersebut menggunakan masing-masing method .then()


*/
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin Kopi tidak bisa digunakan!")
  }
}

const makeCoffee = new Promise(executorFunction);
makeCoffee
  .then(handlerSuccess)
  .catch(handlerRejected);

/* output:
Mesin Kopi tidak bisa digunakan!
*/