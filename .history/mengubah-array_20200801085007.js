/*
Membuat variabel dengan const akan membuat variabel tersebut bersifat read-only, 
tapi bukan berarti tidak dapat diubah nilainya. Mungkin variabel yang menampung 
nilai primitif seperti string, number, boolean akan sulit mengubah nilainya tanpa melalui inisialisasi ulang.
*/
const fruits = ["apple", "orange"];
fruits.push("banana");
 
 
console.log(fruits);
 
 
/* output
[ 'apple', 'orange', 'banana' ] 
*/