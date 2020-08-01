/*
Destructuring adalah sintaks yang dapat mengeluarkannilai dari array atau properties dari sebuah object ke dalam satuan yang lebih
kecil. 
*/
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

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