/**
 * Sama seperti regular function, arrow function sebenarnya tidak benar-benar
menghilangkan tanda kurung kurawal ({ }) dalam penulisannya. Tanda kurung
kurawal pun berfungsi sama seperti regular function yakni menampung body
function di mana tempat logika fungsi dituliskan. Penulisan tanda kurung kurawal
menjadi opsional ketika body fungsi hanya terdiri dari satu expression ataustatement saja.
 */
const sayHello = language => {
    if(language.toUpperCase() === "INDONESIA") {
        return "Selamat Pagi!";
    } else {
        return "Good Morning!";
        /**
         * menuliskan kembali keyword return agar fungsi tersebut
            dapat mengembalikan nilai.
         */
    }
}

console.log(sayHello("Indonesia"));

/* output:
Selamat Pagi!
*/