/**
 * Hal yang membuat bingung ketika kita bekerja dengan synchronous dan
asynchronous program adalah bagaimana menangani suatu nilai yang
didapatkan secara asynchronous pada program yang berjalan secara
synchronous.

Jadi fungsi getCake() akan selalu
mengembalikan nilai null , karena kode return cake akan dieksekusi terlebih
dahulu dibandingkan dengan cake = “Kue Selesai!” . Kode asynchronous perlu
disusun dengan cara yang berbeda dari synchronous code. Cara paling dasar
adalah dengan menggunakan callback function.

Apa itu callback function? Mari kita bayangkan kembali melalui pandangan dunia
nyata. Kita menunggu pesanan kopi datang di meja kita tapi , pada saat itu juga
kita tidak bisa berada terus di tempat itu karena ada urusan mendadak. Padakasus ini mungkin terdapat dua aksi yang bisa kita lakukan:
● (Synchronous) Kita tetap menunggu di meja hingga kopi itu datang dan
kemudian meninggalkan kedai kopi.
● (Asynchronous) Kita meminta tolong kepada teman kita untuk menerima
kopi itu, dan bertemu nanti untuk memberikan kopinya. Sehingga kita tidak
perlu menunggu untuk meninggalkan kedai kopi.

 */
const getCake = () => {
    let cake = null;
    console.log("Sedang membuat kue, silakan tunggu ....")
    setTimeout(() => {
        cake = "Kue Selesai!"
    }, 3000)
    return cake;
}

const cake = getCake();
console.log(cake);

/*output:
Sedang membuat kue, silakan tunggu ....
null
*/