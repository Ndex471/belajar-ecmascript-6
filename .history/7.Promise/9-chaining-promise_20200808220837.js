/**
 * Ketika kita memesan kopi melalui fungsi reserveACo ee() , pertama barista akan
mengambil biji kopi melalui fungsi getSeeds() . Fungsi ini membutuhkan 2 (dua)
parameter yaitu type (tipe kopi), dan miligrams (banyak kopi yang diperlukan).
Fungsi ini mengembalikan objek promise, di mana jika biji yang dipesan tersedia
akan mengembalikan resolve -> “Biji kopi didapatkan!”. Namun jika biji kopi tidak
tersedia, maka akan mengembalikan reject -> “Maaf stok kopi habis!”.

Lalu kita panggil method .then() dari fungsi getSeeds , dan memberikan
parameter fungsi makeCo ee di dalamnya. Fungsi makeCo ee() akan menerima
parameter berupa nilai yang dibawa resolve pada getSeeds() . Fungsi ini juga
mengembalikan nilai promise juga, di mana jika mesin kopi siap digunakan, maka
akan mengembalikan resolve -> “Kopi berhasil dibuat”. Namun jika sebaliknya,
mesin kopi tidak siap untuk digunakan, maka akan mengembalikan reject ->
“Maaf mesin tidak dapat digunakan!”


 */
const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
      arabica: 250,
      robusta: 60,
      liberica: 80
    }
  }
  
  const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
      if(state.seedStocks[type] >= miligrams) {
        state.seedStocks[type] =- miligrams;
        resolve("Biji kopi didapatkan!")
      } else {
        reject("Maaf stock kopi habis!")
      }
    });
  }
  
  const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
      if(state.isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat!")
      } else {
        reject("Maaf mesin tidak dapat digunakan!");
      }
    })
  }
  
  const servingToTable = coffee => {
    return new Promise(resolve => {
      resolve("Pesanan kopi sudah selesai!")
    })
  }
  
  function reserveACoffee(type, miligrams) {
    getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then(resolvedValue => {
      console.log(resolvedValue);
    })
    .catch(rejectedReason => {
      console.log(rejectedReason);
    })
  }
  
  /* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
  reserveACoffee("liberica", 80);
  