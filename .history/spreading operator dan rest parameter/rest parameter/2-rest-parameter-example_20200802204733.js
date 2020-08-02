const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);


/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ]
*/