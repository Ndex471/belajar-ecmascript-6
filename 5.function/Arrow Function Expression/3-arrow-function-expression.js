/**
 * Regular function dapat berupa function declaration atau function
expression, namun arrow function hanya berupa function expression saja
 */
// function expression
const sayHello = greet => console.log(`${greet}!`);
const sayName = name => console.log(`Nama saya ${name}`);
/**
 * Karena arrow function merupakan sebuah expression, maka ia hanya dapat 
 * digunakan untuk disimpan pada variabel (seperti contoh kode di atas), 
 * sebagai argumen pada sebuah fungsi, dan sebagai nilai dari properti objek.
 */