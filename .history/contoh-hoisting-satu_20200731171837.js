/* Hoisting adalah proses pengangkatan deklarasi var var akan selalu diangkat pada
tingkatan atas sebuah fungsi walaupun kita menuliskannya bukan pada
tingkatan atas fungs
*/
function makeCoffee(isHot) {
    if (isHot) {
        var coffee = "Make an Hot Coffee"
    } else {
        var coffee = "Make a Ice Coffee"
    }
    return coffee;
}
console.log(makeCoffee(false));
/*Output
Make a Ice Coffee
*/