/**
 * Dalam membuat custom element, kita menuliskannya dengan menggunakan
JavaScript class. Class tersebut mewarisi sifat dari HTMLElement. HTMLElement
merupakan interface yang merepresentasikan element HTML. Interface ini
biasanya diterapkan pada class JavaScript sehingga terbentuklah element HTML
baru melalui class tersebut (custom element).

Yeay! ImageFigure sekarang merupakan sebuah HTML element baru. Namun
tunggu dulu. Untuk menggunakannya pada berkas HTML, kita perlu menetapkan
nama tag yang nantinya digunakan pada HTML

customElements merupakan global variable yang digunakan untuk
mendefinisikan custom element dan memberitahu bahwa terdapat HTML tag
baru. Di dalam customElements terdapat method yang bernama define(). Di
sinilah kita meletakan tag name baru kemudian diikuti dengan JavaScript class
yang menerapkan sifat HTMLElement.
“Dalam penamaan tag untuk custom element, nama tag harus terdiri dari dua
kata yang dipisahkan oleh dash (-). Jika tidak, pembuatan custom element tidak
akan berhasil. Hal Ini diperlukan untuk memberi tahu browser perbedaan antara
elemen asli HTML dan custom element.”
Setelah mendefinisikan custom element, barulah ia siap digunakan pada berkas
HTML.

 */
class ImageFigure extends HTMLElement {

}

customElements.define("image-figure", ImageFigure);