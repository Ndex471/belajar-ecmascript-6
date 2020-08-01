/*
Kode disini akan mengekstraksi nilai yang berada di dalam objek 
profile dan menyimpannya pada variabel lokal yang memiliki nama 
sama dengan properti di dalam objek profile. Mungkin mengekstraksi nilai dari objek dengan langkah ini terlihat mudah, namun bayangkan jika objek memiliki banyak properti dan harus melakukan hal tersebut secara manual satu persatu.  
*/
const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}
 
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
 
console.log(firstName, lastName, age)

/* output:
Gunawan Aji 21
*/