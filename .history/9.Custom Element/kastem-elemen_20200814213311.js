/**
 * Dalam membuat custom element, kita menuliskannya dengan menggunakan
JavaScript class. Class tersebut mewarisi sifat dari HTMLElement. HTMLElement
merupakan interface yang merepresentasikan element HTML. Interface ini
biasanya diterapkan pada class JavaScript sehingga terbentuklah element HTML
baru melalui class tersebut (custom element).
 */
class ImageFigure extends HTMLElement {

}

customElements.define("image-figure", ImageFigure);