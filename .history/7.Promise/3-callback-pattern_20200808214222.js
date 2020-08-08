/**
 * Nah pada JavaScript, teman kita berperan layaknya callback function. Ia
diperintahkan pada sebuah fungsi asynchronous kemudian akan
dipanggil/digunakan ketika tugas itu selesai.
Bagaimana cara melakukannya? Yang pertama kita tambahkan parameter
dengan nama callback pada fungsi asynchronous.

Kemudian kita panggil/gunakan callback yang diisikan dengan data yang akan
dibawa (cake) ketika task selesai dilakukan.
 */
const getCake = callback => {
    let cake = null;
    console.log("Sedang membuat kue, silakan tunggu ....")
    setTimeout(() => {
        cake = "Kue Selesai!";
        callback(cake);
    }, 3000)
}

getCake(cake => {
    console.log(cake);
})

/* output:
Sedang membuat kue, silakan tunggu ....
---- setelah 3 detik ----
Kue Selesai!
*/