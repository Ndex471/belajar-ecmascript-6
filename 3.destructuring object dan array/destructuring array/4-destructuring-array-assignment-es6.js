const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;
//Namun tidak
seperti objek, kita tidak perlu membungkusnya pada tanda kurung
console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
*/