/*Variabel yang dideklarasikan dengan let atau const akan menghilangkan
permasalahan dari hoisting karena variabel akan tersedia pada cakupan block
(sama seperti bahasa pemrograman berbasis C), bukan pada fungsi.*/
function makeJuice(isCold){
    if(isCold){
        let juice="Make an Ice Juice"
    } else {
        let juice="Make a Hot Juice"
    }
    return juice;
}
console.log(makeJuice(false));
/*Output
ReferenceError: juice is not defined
*/