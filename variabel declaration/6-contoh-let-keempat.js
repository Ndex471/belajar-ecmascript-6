/*
Persamaan let dengan const adalah variabel yang dideklarasikan
dengan let atau const tidak dapat di deklarasikan ulang pada cakupan yang
sama (kita dapat melakukan hal ini ketika menggunakan var ).

Perbedaanya antara let dan const adalah jika kita menggunakan let maka
variabel tersebut dapat diinisialisasi ulang nilainya. Sedangkan const tidak bisa,
sehingga jika kita menggunakan const pastikan kita langsung menginisialisasi
nilai dari variabel tersebut.
*/
let nama="ganda";
nama="putra";
/* 
Gunakan let ketika variabel yang kita buat akan diinisialisasikan kembali
nilainya.
*/
console.log(nama);

/* Output:
putra
*/