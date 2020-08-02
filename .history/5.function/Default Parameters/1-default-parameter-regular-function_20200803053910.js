/**
 * Dengan menggunakan default parameters, nilai pada parameter tidak 
 * akan menghasilkan undefined walaupun kita tidak memberikan nilai 
 * ketika fungsi tersebut dipanggil. Default parameter dapat digunakan pada regular function ataupun arrow function
 */
function sayHello(name = "Stranger", greet = "Hello") {
    console.log(`${greet} ${name}!`);
}

sayHello("Dimas", "Hai");
sayHello();

/* output:
Hai Dimas!
Hello Stranger!
*/