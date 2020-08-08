
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