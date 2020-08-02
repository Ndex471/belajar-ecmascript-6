/**
 * kita menggunakan tanda assignment (=) untuk menetapkan parameter name dengan nilai 
 * default “Stranger”, dan parameter greet dengan nilai default “Hello”. Hal ini sangat 
 * berguna ketika kita memanggil fungsi sayHello() tanpa menetapkan nilai parameter di 
 * dalamnya, karena walaupun kita tidak menetapkan nilainya, kedua parameter tersebut 
 * tidak akan menghasilkan undefined.
 */

const sayHello = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);

sayHello("Dimas", "Hai");
sayHello();

/* output:
Hai Dimas!
Hello Stranger!
*/