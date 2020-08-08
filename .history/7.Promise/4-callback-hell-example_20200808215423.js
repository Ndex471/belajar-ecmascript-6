/**
 * Namun jika fungsi-fungsi tersebut berjalan secara asynchronous, maka kita akan
membuat yang namanya callback hell. Callback hell terjadi karena banyak sekali
callback function yang bersarang karena saling membutuhkan satu sama lain,

Dengan Promise, kita dapat meminimalisir callback hell dan mengubahnya
menjadi kode yang sangat mudah dibaca. Promise ini dapat
menggantikan peran callback dengan menggunakan ciri khas fungsi .then -nya
itu.

Nah, Promise memiliki perilaku yang sama dengan analogi yang digambarkan
tadi. Dalam promise terdapat 3 (tiga) kondisi, yakni:
● Pending (Janji sedang dalam proses)
● Fulfilled (Janji terpenuhi)
● Rejected (Janji gagal terpenuhi)

https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Promise
Promise merupakan sebuah objek yang digunakan untuk
membuat sebuah perhitungan (kode) ditangguhkan dan berjalan secara
asynchronous. Untuk membuat objek promise, kita gunakan keyword new diikuti
dengan constructor dari Promise

1. const coffee = new Promise();
Namun jika kita jalankan kode tersebut, akan mengakibatkan eror seperti ini:
1.  ERROR: Promise resolver undefined is not a function 
Di dalam constructor Promise kita perlu menetapkan resolver function atau bisa
disebut executor function di mana fungsi tersebut akan dijalankan secara
otomatis ketika constructor Promise dipanggil.

Executor function dapat memiliki dua parameter, yang berfungsi sebagai
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
3. */
Kenapa demikian? Executor function mengeksekusi resolve() dengan membawa
data string “Kopi berhasil dibuat”. Coba kita ubah nilai dari variabel
isCo eeMakerReady menjadi false , maka executor function akan mengeksekusi
reject() dengan membawa pesan rejection "Mesin Kopi tidak bisa digunakan!".
1. /* output:
2. Promise { <rejected> 'Mesin Kopi tidak bisa digunakan!' }
3. 
*/
function gatheringIngredients(rawIngridient, callback) {
    console.log("Menyiapkan bahan ....");
    setTimeout(function() {
      if(rawIngridient) {
        const ingridient = `Bahan ${rawIngridient} sudah siap!`;
        callback(ingridient);
      }
    }, 1000)
  }
  
  function makeTheDough(ingridient, callback) {
    console.log("Membuat adonan ...." );
    setTimeout(function() {
      if(ingridient) {
        const dough = "Adonan Selesai!"
        callback(dough);
      }
    }, 2000)
  }
  
  function pourDough(dough, callback) {
    console.log("Menyiapkan adonan ke cetakan .....")
    setTimeout(function() {
      const pouredDough = "Cetakan Adonan Selesai!";
      callback(pouredDough);
    }, 1000)
  }
  
  function bakeACake(pouredDough, callback) {
    console.log("Memanggang kue ....");
    setTimeout(function() {
      const cake = "Kue sudah siap!";
      callback(cake);
    }, 3000)
  }
  
  /* callback hell terjadi di sini! */
  function makeACake(...rawIngredients) {
    gatheringIngredients(rawIngredients, function(ingridients) {
      makeTheDough(ingridients, function(dough) {
        pourDough(dough, function(pouredDough) {
          bakeACake(pouredDough, function(cake) {
            console.log(cake);
          });
        });
      });
    });
  }
  
  makeACake("Sugar", "Milk", "Butter");
  
  /* output:
  Menyiapkan bahan ....
  Membuat adonan ....
  Menyiapkan adonan ke cetakan .....
  Memanggang kue ....
  Kue sudah siap!
  */