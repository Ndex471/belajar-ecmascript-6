/*
mengubah dan menginisialisasikan ulang nilai pada variabel merupakan hal yang berbeda. 
Kita bisa lihat perbedaanya dengan jelas ketika sebuah variabel tersebut merupakan array atau objek.
*/
const fruits = ["apple", "orange"];
fruits = ["apple", "orange", "banana"];
 
 
console.log(fruits);
 
 
/* output
TypeError: Assignment to constant variable. */