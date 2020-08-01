*/Persamaan let dengan const adalah variabel yang dideklarasikan
dengan let atau const tidak dapat di deklarasikan ulang pada cakupan yang
sama (kita dapat melakukan hal ini ketika menggunakan var ).
let nama="Nawawi";
let nama="Uston";

console.log(nama);

/* error:
SyntaxError: Identifier 'nama' has already been declared
*/