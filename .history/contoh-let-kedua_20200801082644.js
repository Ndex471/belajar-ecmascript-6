/*
Variabel yang dideklarasikan dengan let akan menghilangkan
permasalahan dari hoisting karena variabel akan tersedia pada cakupan block
(sama seperti bahasa pemrograman berbasis C), bukan pada fungsi.

Variabel yang dideklarasikan menggunakan let ataupun const juga tidak dapat
diakses sebelum ia dideklarasikan, karena variabel akan terhenti pada tempat
yang biasa disebut dengan temporal dead zone hingga akhirnya variabel
tersebut dideklarasi.

Hal ini menjadikan JavaScript lebih ketat dalam pendeklarasian variabel, sehingga
dapat meminimalisir peluang terjadinya bug.
*/

function getMouse(){
    mouse="molucca";
    console.log(mouse);
    let mouse;
    
}
getMouse();
/*error:
ReferenceError : mouse is not defined
*/