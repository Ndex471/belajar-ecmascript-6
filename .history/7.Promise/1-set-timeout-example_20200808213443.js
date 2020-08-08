/**
 * Dalam synchronous program, jika kita menuliskan dua baris kode maka baris
kode yang kedua tidak bisa dieksekusi sebelum mengeksekusi kode pada baris
pertama. 

Dalam asynchronous program, jika kita menuliskan dua baris kode, kita dapat
membuat baris kode kedua dieksekusi tanpa harus menunggu kode pada baris
pertama selesai dieksekusi. Dalam dunia nyata kita bisa membayangkan dengan
memesan kopi namun memesannya melalui pelayan, di mana sembari kita
menunggu pesannya datang, kita dapat melakukan aktivitas lain seperti
membuka laptop, menulis, hingga kopi itu datang dengan sendirinya.
 */
console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terimakasih sudah mampir, silakan datang kembali!")
}, 3000)
console.log("Ada yang bisa dibantu?")