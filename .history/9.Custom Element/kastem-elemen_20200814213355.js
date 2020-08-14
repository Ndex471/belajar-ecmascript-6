/**
 * Dalam membuat custom element, kita menuliskannya dengan menggunakan
JavaScript class. Class tersebut mewarisi sifat dari HTMLElement. HTMLElement
merupakan interface yang merepresentasikan element HTML. Interface ini
biasanya diterapkan pada class JavaScript sehingga terbentuklah element HTML
baru melalui class tersebut (custom element).

Yeay! ImageFigure sekarang merupakan sebuah HTML element baru. Namun
tunggu dulu. Untuk menggunakannya pada berkas HTML, kita perlu menetapkan
nama tag yang nantinya digunakan pada HTML

 */
class ImageFigure extends HTMLElement {

}

customElements.define("image-figure", ImageFigure);