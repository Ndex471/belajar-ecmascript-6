/*
Destructuring adalah sintaks yang dapat mengeluarkan nilai dari array 
atau properties dari sebuah object ke dalam satuan yang lebih kecil. 
*/
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
/**
 * Jika objek
menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda
kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja
berdasarkan posisi daripada penamaan propertinya
 */
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/