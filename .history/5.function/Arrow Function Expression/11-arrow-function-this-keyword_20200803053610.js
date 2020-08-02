function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    /**
     * fungsi yang dibuat dengan menggunakan gaya arrow tidak akan pernah 
     * memiliki nilai this, yang artinya kita tidak pernah bisa membuat 
     * objek menggunakan arrow function. Jika kita menggunakan this pada arrow function maka nilai this tersebut merupakan nilai objek di mana arrow function itu berada.
     */
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(() => {
        // this -> People
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
    /**
     * ketika kita menuliskan arrow function di dalam setTimeout(), nilai this 
     * memiliki nilai objek sesuai dengan konteksnya (People)
     */
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();


/* output:
Hello! Nama saya John, umur saya 18.
Hobby saya adalah Coding,Read book,Ping-pong
*/