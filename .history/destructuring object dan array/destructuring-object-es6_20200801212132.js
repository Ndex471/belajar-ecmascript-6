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
/** */
console.log(firstName, lastName, age);

/* output:
Gunawan Aji 21
*/