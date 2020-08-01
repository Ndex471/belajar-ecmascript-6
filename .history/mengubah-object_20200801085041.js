/*
Membuat variabel dengan const akan membuat variabel tersebut bersifat read-only, 
tapi bukan berarti tidak dapat diubah nilainya. Mungkin variabel yang menampung 
nilai primitif seperti string, number, boolean akan sulit mengubah nilainya tanpa melalui inisialisasi ulang.
*/
onst people = { name: "John", age: 18 }
 
 
people.regency = "Bandung"
 
 
console.log(people);
 
 
/* output
  { name: 'John', age: 18, regency: 'Bandung' }
*/