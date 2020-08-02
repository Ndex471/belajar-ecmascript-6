const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}


const {firstName, age, isMale = false} = profile;
/**
 * opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukanya tambahkan tanda assignment (=) setelah nama variabel 
 */
console.log(firstName)
console.log(age)
console.log(isMale)

/* output:
Gunawan
21
false
*/