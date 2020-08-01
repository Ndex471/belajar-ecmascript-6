/* Hoisting adalah proses pengangkatan deklarasi var pada
tingkatan atas sebuah fungsi walaupun kita menuliskannya bukan pada
tingkatan atas fungsi
*/
function getWater(){
    water="orange";
    console.log(water);
    var water;
    //karena hoisting kita bisa menginisialisasi nilai dan menggunakan variabel sebelum ia dideklarasikan
}
getWater();
/*Output
orange
*/