const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}


const {firstName, age, isMale = false} = profile;
/** */
console.log(firstName)
console.log(age)
console.log(isMale)

/* output:
Gunawan
21
false
*/