const profile = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}

const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
//v
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);


/* output:
Gunawan
Aji
21
*/