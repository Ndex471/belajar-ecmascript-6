const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 18
}


const {firstName, age, isMale = false} = profile;

console.log(firstName)
console.log(age)
console.log(isMale)

/* output:
John
18
false
*/