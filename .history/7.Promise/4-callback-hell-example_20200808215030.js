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