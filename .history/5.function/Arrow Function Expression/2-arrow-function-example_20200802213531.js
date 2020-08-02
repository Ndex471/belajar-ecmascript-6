/**
 * Arrow function mirip seperti regular
function secara perilaku, namun penulisannya jauh berbeda. Sama seperti
namanya, fungsi didefinisikan dengan menggunakan tanda panah (=>) dan tentu
penulisan fungsi dengan arrow ini akan lebih singkat.
 */
const upperizedNames = ["Gunawan", "Kurniya", "Aji"]
    .map(name => name.toUpperCase())

console.log(...upperizedNames);

/* output:
DIMAS WIDY BUCHORI
*/