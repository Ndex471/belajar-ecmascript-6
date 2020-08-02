/*
Destructuring pada JavaScript merupakan sintaks yang dapat mengeluarkan
nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih
kecil.
*/
const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}
 
const {firstName, lastName, age} = profile;
/*
Penulisan destructuring object pada ES6 sintaks menggunakan objek 
literal { } di sisi kiri dari operasi assignment.  

Pada contoh di atas tanda kurung kurawal { } merepresentasikan 
objek yang akan didestruksikan. 
*/
console.log(firstName, lastName, age);
/**
 * Jika objek
menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda
kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja
berdasarkan posisi daripada penamaan propertinya
 */
/* output:
Gunawan Aji 21
*/