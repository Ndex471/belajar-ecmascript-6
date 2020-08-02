/*
**Contohnya jika kita ingin mengambil nilai ketiga dari array, kita tidak perlu
menyiapkan lokal variabel untuk menampung nilai array pertama, kedua, atau
pun keempat. Kita bisa melakukannya dengan membiarkan index array yang kita
tidak inginkan tetap kosong (tanpa menulis variabel lokal). 
*/
 * const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , thirdFood ] = favorites;

console.log(thirdFood);

/* output:
Nugget
*/