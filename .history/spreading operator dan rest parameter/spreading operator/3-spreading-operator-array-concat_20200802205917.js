/**
 * Spread operator dapat digunakan untuk menggabungkan dua buah array dalam
objek array baru
*/
//Sebelum spread operator
//const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
//const others = ["Cake", "Pie", "Donut"];
//const allFavorites = [favorites, others]
//console.log(allFavorites);
/* output:
[[ 'Seafood', 'Salad', 'Nugget', 'Soup' ], [ 'Cake', 'Pie', 'Donut' ]]
*/
/** */
//Setelah Spread Operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others]

console.log(allFavorites);

/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/