//sebelum spreading operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);
/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/
/**
 * Spreading operator dituliskan dengan three consecutive dots (....). Sesuai
namanya “Spread”, fitur baru ES6 ini digunakan untuk membentangkan nilai
array atau lebih tepatnya iterable object menjadi beberapa elements.
 */
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output:
Seafood Salad Nugget Soup
*/