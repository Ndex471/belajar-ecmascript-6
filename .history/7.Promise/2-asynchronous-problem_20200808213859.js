/**
 * Hal yang membuat bingung ketika kita bekerja dengan synchronous dan
asynchronous program adalah bagaimana menangani suatu nilai yang
didapatkan secara asynchronous pada program yang berjalan secara
synchronous.


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