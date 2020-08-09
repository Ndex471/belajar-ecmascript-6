/**
 * Executor function dapat memiliki dua parameter, yang berfungsi sebagai
resolve() dan reject() function. Berikut penjelasan detailnya:
● resolve() merupakan parameter pertama pada executor function.
Parameter ini merupakan fungsi yang dapat menerima satu parameter,
biasanya kita gunakan untuk mengirimkan data ketika promise berhasil
dilakukan. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari
pending menjadi fulfilled .
● reject() merupakan parameter kedua pada executor function. Parameter inimerupakan fungsi yang dapat menerima satu parameter yang digunakan
untuk memberikan alasan mengapa Promise tidak dapat terpenuhi. Ketika
fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi
rejected .
Executor function akan berjalan secara asynchronous hingga akhirnya kondisi
Promise berubah dari pending menjadi fulfilled / rejected .
Pada contoh kode di atas, berikut ini outputnya:
1. /* output:
2. Promise { 'Kopi berhasil dibuat' }
3. 
Kenapa demikian? Executor function mengeksekusi resolve() dengan membawa
data string “Kopi berhasil dibuat”. Coba kita ubah nilai dari variabel
isCo eeMakerReady menjadi false , maka executor function akan mengeksekusi
reject() dengan membawa pesan rejection "Mesin Kopi tidak bisa digunakan!".
1. /* output:
2. Promise { <rejected> 'Mesin Kopi tidak bisa digunakan!' }

Dari output yang dihasilkan baik ketika fulfilled ataupun rejected masih berupa
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