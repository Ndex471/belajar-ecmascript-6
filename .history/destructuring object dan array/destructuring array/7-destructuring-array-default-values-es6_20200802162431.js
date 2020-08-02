const favorites = ["Seafood"];

const [myFood, herFood = "Salad"] = favorites
/**
 * Ketika melakukan array destructuring namun terdapat variabel yang posisinya
tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai
undefined
 */
console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/