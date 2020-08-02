var a = 1;
var b = 2;
var temp;
/**
 * Variabel penengah te
dibutuhkan untuk menyimpan data sementara pada variabel yang akan ditukar.
Hal ini menjadi kurang efektif karena kita harus membuat variabel baru yang
sebenarnya hanya bersifat sementara.
 */
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/