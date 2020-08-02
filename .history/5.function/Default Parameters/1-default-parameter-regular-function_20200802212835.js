function sayHello(name = "Stranger", greet = "Hello") {
    console.log(`${greet} ${name}!`);
}

sayHello("Dimas", "Hai");
sayHello();

/* output:
Hai Dimas!
Hello Stranger!
*/