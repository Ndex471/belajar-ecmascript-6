/*
Template literals juga dapat membaca line space secara 
langsung tanpa harus menggunakan escape character. 
*/
const user = {
    firstName: "Dimas",
    lastName: "Saputra",
    age: 18
}
 
const admin = {
    name: "Jane",
    position: "Marketing"
}
 
const message = `Dear, ${user.firstName} ${user.lastName}
 
Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.
 
Best Regards,
${admin.name}
${admin.position}`;
 
console.log(message);
 
/* output ->
Dear, Dimas Saputra
 
Selamat ulang tahun yang ke-18 semoga selalu diberikan kesehatan.
 
Best Regards,
Jane
Marketing
*/