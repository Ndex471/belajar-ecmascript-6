/**
 * Rest parameter juga dapat digunakan pada array destructuring, di mana kita
dapat mengelompokkan nilai-nilai array yang terdestruksi pada variabel dalam
bentuk array yang lain
 */
const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);
/**
 * Pada kode di atas nilai dari array refrigerator dimasukkan ke individual lokal
variabel menggunakan array destructuring. Variabel manufacture , weight , door
diberikan nilai index tiga pertama dari array refrigerator , namun variabel items di
mana kita menggunakan rest parameter, akan diberikan sisa nilai yang ada
sebagai array.
 */

/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ]
*/