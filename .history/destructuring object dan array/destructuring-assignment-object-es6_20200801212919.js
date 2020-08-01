const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}

let firstName = "Dirga";
let age = 22;

// menginisialisasi nilai baru melalui object destruction
({firstName, age} = profile);

console.log(firstName);
console.log(age);

/* output:
John
18
*/