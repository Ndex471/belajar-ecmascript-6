/*
Gunakanlah tanda backticks (`) untuk menggantikan tanda single quotes (‘) 
atau double quotes (“) yang digunakan sebelumnya. Template literals juga dapat mengandung sebuah expression dengan menuliskannya di dalam tanda ${expression}
*/
const user = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}
 
console.log(`Nama: ${user.firstName} ${user.lastName}, Umur: ${user.age}`);
 
/* output:
Nama: Gunawan Aji, Umur: 21
*/