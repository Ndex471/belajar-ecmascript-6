const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}

const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
//dalam mendestruksikan objek kita bisa menggunakan penamaan variabel lokal yang berbeda
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);


/* output:
Gunawan
Aji
21
*/