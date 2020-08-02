function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(() => {
        // this -> People
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();


/* output:
Hello! Nama saya John, umur saya 18.
Hobby saya adalah Coding,Read book,Ping-pong
*/