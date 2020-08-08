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

Namun untuk menetapkan rejected handler kita perlu memberikan nilai null pada
parameter method .then() . Well.. hal ini sedikit merepotkan bukan? Solusinya kita
dapat menggunakan method lain, yakni .catch() .
Method .catch() mirip seperti .then() . Namun method ini hanya menerima satu
parameter function yang digunakan untuk rejected handler. Method .catch() ini
akan terpanggil bilamana objek promise memiliki kondisi onRejected.
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