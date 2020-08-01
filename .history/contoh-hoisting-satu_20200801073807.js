/* Hoisting adalah proses pengangkatan deklarasi var pada
tingkatan atas sebuah fungsi walaupun kita menuliskannya bukan pada
tingkatan atas fungsi
*/

function makeCoffee(isHot) {
    if (isHot) {
        var coffee = "Make an Hot Coffee"
    } else {
        var coffee = "Make a Ice Coffee"
        //bila mendeklarasikan variabel dengan var, di belakang layar, 
        //JS mengangkat proses deklarasi variabel coffee pada tingkatan atas fungsi.
        //Sehingga variabel tersebut akan 
    }
    return coffee;
}
console.log(makeCoffee(false));
/*Output
Make a Ice Coffee
*/