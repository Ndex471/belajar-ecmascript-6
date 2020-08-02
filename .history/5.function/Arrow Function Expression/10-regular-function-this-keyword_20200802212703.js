function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(function() {
       // this -> ??
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();

/* output:
Hello! Nama saya undefined, umur saya undefined.
Hobby saya adalah undefined
*/