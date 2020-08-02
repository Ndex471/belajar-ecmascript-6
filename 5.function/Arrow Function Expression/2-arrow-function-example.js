/**
 * Arrow function mirip seperti regular
function secara perilaku, namun penulisannya jauh berbeda. Sama seperti
namanya, fungsi didefinisikan dengan menggunakan tanda panah (=>) dan tentu
penulisan fungsi dengan arrow ini akan lebih singkat.
 */
const upperizedNames = ["Gunawan", "Kurniya", "Aji"]
    .map(name => name.toUpperCase())
/**
 * dalam satu baris dengan arrow function kita
dapat menghapus kata function , tanda kurung, tanda kurawal, kata return , dan
semicolon (;). Kita hanya perlu menambahkan tanda panah (=>) di antara
parameter dan kode fungsinya.
 */
console.log(...upperizedNames);

/* output:
GUNAWAN KURNIYA AJI
*/