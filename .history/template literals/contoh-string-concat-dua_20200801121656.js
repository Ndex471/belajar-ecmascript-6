const user = {
    firstName: "Gunawan",
    lastName: "Aji",
    age: 21
}

const admin = {
    name: "Ajeng",
    position: "Marketing"
}

const message = "Dear, " + user.firstName + " " + user.lastName +  "\n\n" +
"Selamat ulang tahun yang ke-" + user.age + " semoga selalu diberikan kesehatan." + "\n\n" +
"Best Regards,\n" +
admin.name + "\n" +
admin.position;

console.log(message);

/* output ->
Dear, Gunawan Aji
 
Selamat ulang tahun yang ke-18 semoga selalu diberikan kesehatan.
 
Best Regards,
Ajeng
Marketing
*/