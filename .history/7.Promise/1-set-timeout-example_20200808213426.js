/**
 * Dalam synchronous program, jika kita menuliskan dua baris kode maka baris
kode yang kedua tidak bisa dieksekusi sebelum mengeksekusi kode pada baris
pertama. Kita bisa bayangkan ini dalam kehidupan nyata ketika mengantri
membeli kopi di sebuah kedai kopi. Kita tidak bisa mendapatkan kopi sebelum
semua antrian di depan kita selesai dilayani, sama hal nya orang yang di
belakang kita pun harus menunggu gilirannya.
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