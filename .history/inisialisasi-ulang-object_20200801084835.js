/*
mengubah dan menginisialisasikan ulang nilai pada variabel merupakan hal yang berbeda. 
Kita bisa lihat perbedaanya dengan jelas ketika sebuah variabel tersebut merupakan array atau objek.
*/
const people = { name: "John", age: 18 };
people = { name: "John", age: 18, regency: "Bandung" };
 
 
console.log(people);
 
 
/* TypeError: Assignment to constant variable. */