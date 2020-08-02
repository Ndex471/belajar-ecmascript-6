function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    /**
     * Jika sebuah regular function dipanggil dengan menggunakan keyword new . Maka
        nilainya akan menjadi objek
     */
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(function() {
       // this -> ??
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
    /**
     * Fungsi yang dituliskan di dalam setTimeout() dipanggil tanpa new. Itu berarti nilai dari this jika digunakan di dalam fungsi tersebut adalah global object. Itulah mengapa output akan menghasilkan nilai undefined ketika properti name, age, dan hobby dipanggil.
     */
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();

/* output:
Hello! Nama saya undefined, umur saya undefined.
Hobby saya adalah undefined
*/