/**
 * Sebelum ES6,
JavaScript tidak melakukan improvisasi yang signifikan pada penulisannya. Hal
ini membuat JavaScript terlihat monoton padahal fungsi sendiri banyak sekali
dituliskan ketika kita mengembangkan website/aplikasi.

Pada ES6 banyak improvisasi pada penulisan fungsi. Sekarang kita bisa
menuliskan fungsi secara singkat dengan memanfaatkan arrow function,
membuat fungsi sebagai class dengan hadirnya keyword class , menetapkan nilai
default pada parameter fungsi, dan sebagainya.
 */

//regular fungsi sebagai callback
const upperizedNames = ["Gunawan", "Kurniya", "Aji"]
    .map(function(name) {
        return name.toUpperCase();
})

console.log(...upperizedNames);

/* output:
GUNAWAN KURNIYA AJI
*/

// function declaration
//function sayHello(greet) {
    //console.log(`${greet}!`);
//}
 
 
// function expression
//const sayName = function (name) {
    //console.log(`Nama saya ${name}`)
}