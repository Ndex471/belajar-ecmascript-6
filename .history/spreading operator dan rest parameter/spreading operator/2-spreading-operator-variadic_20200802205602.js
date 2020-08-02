/**
 * Spread operator bekerja seperti meleburkan nilai 
 * array menjadi beberapa elemen sesuai dengan panjang
nilai array-nya
 */

/* Math.max() -> Mencari nilai terbesar */
const numbers = [12, 32, 50, 12, 32];

// Sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])

console.log(Math.max(...numbers));
/**
 * Spread operator ini cocok sekali digunakan sebagai nilai parameter pada variadic
functions, seperti console.log() atau Math.max() .
 */
/* output
50
*/