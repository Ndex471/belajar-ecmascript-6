/**
 * 
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