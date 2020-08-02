const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}

let firstName = "Dirga";
let age = 22;

// menginisialisasi nilai baru melalui object destruction
({firstName, age} = profile);
/**
 * Saat melakukan destructuring assignment kita perlu 
 * menuliskan destructuring object di dalam tanda kurung. 
 * Jika tidak dituliskan di dalamnya, tanda buka kurung 
 * kurawal akan membuat JavaScript mengira kita membuat 
 * block statement, dan block statement tentu tidak bisa 
 * berada pada sisi kiri assignment. 
 */

 //fungsinya tanda kurung, ia akan memberitahu JavaScript bahwa tanda kurawal yang di dalamnya bukan sebuah block statement, melainkan sebuah expression. Sehingga assignment dapat dilakukan.
console.log(firstName);
console.log(age);

/* output:
Gunawan
21
*/