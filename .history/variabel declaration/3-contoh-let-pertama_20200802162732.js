/*
Variabel yang dideklarasikan dengan let akan menghilangkan
permasalahan dari hoisting karena variabel akan tersedia pada cakupan block
sama seperti bahasa pemrograman berbasis C, bukan pada fungsi.

Variabel yang dideklarasikan menggunakan let juga tidak dapat
diakses sebelum ia dideklarasikan, karena variabel akan terhenti pada tempat
yang biasa disebut dengan temporal dead zone hingga akhirnya variabel
tersebut dideklarasi.

Hal ini menjadikan JavaScript lebih ketat dalam pendeklarasian variabel, sehingga
dapat meminimalisir peluang terjadinya bug.
*/

function makeJuice(isCold){
    if(isCold){
        let juice="Make an Ice Juice"
    } else {
        let juice="Make a Hot Juice"
    }
/* 
Gunakan let ketika variabel yang kita buat akan diinisialisasikan kembali
nilainya.
*/
    return juice;
}
console.log(makeJuice(false));
/*Output
ReferenceError: juice is not defined
*/