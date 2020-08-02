/*
Variabel yang dideklarasikan dengan const akan menghilangkan
permasalahan dari hoisting karena variabel akan tersedia pada cakupan block
(sama seperti bahasa pemrograman berbasis C), bukan pada fungsi.

Variabel yang dideklarasikan menggunakan const juga tidak dapat
diakses sebelum ia dideklarasikan, karena variabel akan terhenti pada tempat
yang biasa disebut dengan temporal dead zone hingga akhirnya variabel
tersebut dideklarasi.

Hal ini menjadikan JavaScript lebih ketat dalam pendeklarasian variabel, sehingga
dapat meminimalisir peluang terjadinya bug.
*/

/*
Persamaan let dengan const adalah variabel yang dideklarasikan
dengan let atau const tidak dapat di deklarasikan ulang pada cakupan yang
sama (kita dapat melakukan hal ini ketika menggunakan var ).

Perbedaanya antara let dan const adalah jika kita menggunakan let maka
variabel tersebut dapat diinisialisasi ulang nilainya. Sedangkan const tidak bisa,
sehingga jika kita menggunakan const pastikan kita langsung menginisialisasi
nilai dari variabel tersebut.
*/
const nama="Abror";
const nama="Madani";
/*
Gunakan const ketika variabel yang kita buat tidak ingin diinisialisasikan
kembali nilainya.
*/
console.log(nama);

/*Output :
SyntaxError: Identifier 'nama' has already been declared
*/