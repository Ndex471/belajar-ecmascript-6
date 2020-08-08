/**
 * Method Promise.all() dapat menerima banyak promise (dalam bentuk array)
pada parameternya. Kemudian method tersebut akan mengembalikan nilaiseluruh hasil dari promise yang kita tetapkan dalam bentuk array.

Ketika kode di atas dieksekusi, kita perlu menunggu 4 detik sebelum akhirnya
output pada console ditampilkan. Ini menunjukan bahwa Promise.all() akan
mengembalikan nilai jika seluruh proses promise di dalamnya selesai dijalankan.
Urutan nilai yang dihasilkan oleh method ini sesuai dengan urutan promise yang
kita tentukan pada parameternya

Nilai kopi arabika akan tetap berada di posisi pertama, meskipun proses
pembuatannya memakan waktu paling lama.
*/
const arabicaOrder = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Kopi arabika selesai!")
      }, 4000)
    })
  }
  
  const robustaOrder = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Kopi robusta selesai!")
      }, 2000)
    })
  }
  
  const libericaOrder = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Kopi liberica selesai!")
      }, 3000)
    })
  }
  
  const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];
  
  Promise.all(promises)
  .then(resolvedValue => {
    console.log(resolvedValue);
  })
  
  /* output:
  [ 'Kopi arabika selesai!',
    'Kopi robusta selesai!',
    'Kopi liberica selesai!' ]
    */