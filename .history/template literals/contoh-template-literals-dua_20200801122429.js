/*
Template literals juga dapat membaca line space secara 
langsung tanpa harus menggunakan escape character. 
*/
const user = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}
 
const admin = {
    name: "Putri",
    position: "Marketing"
}
 
const message = `Dear, ${user.firstName} ${user.lastName}
 
Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.
 
Best Regards,
${admin.name}
${admin.position}`;
 
console.log(message);
 
/* output ->
Dear, Gunawan Aji
 
Selamat ulang tahun yang ke-1 semoga selalu diberikan kesehatan.
 
Best Regards,
Jane
Marketing
*/