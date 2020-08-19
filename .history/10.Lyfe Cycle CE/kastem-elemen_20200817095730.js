class ImageFigure extends HTMLElement {
    constructor() {
      super();
      console.log("constructed!")
    }
  
    connectedCallback() {
      console.log("connected!");
    }
  
    disconnectedCallback() {
      console.log("disconnected!");
    }
  
    adoptedCallback() {
      console.log("adopted!");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute: ${name} changed!`);
    }
  
    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu attribute yang diamati.
       dengan memisahkan nama attribute menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes() {
      return ["caption"];
    }
  }
  
  customElements.define("image-figure", ImageFigure);

  /**
   * Ketika sebuah JavaScript class mewarisi sifat dari HTMLElement maka class tersebut akan memiliki siklus hidup layaknya sebuah elemen HTML. Kita dapat menerapkan logika pada setiap siklus hidup yang ada dengan memanfaatkan lifecycle callbacks yang ada. Berikut ini lifecycle callbacks yang ada pada HTMLElement:

connectedCallback() : Akan terpanggil setiap kali elemen berhasil ditambahkan ke dokumen HTML (DOM). Callback ini merupakan tempat yang tepat untuk menjalankan konfigurasi awal seperti mendapatkan data, atau mengatur attribute.
disconnectedCallback() : Akan terpanggil setiap kali elemen dikeluarkan (remove()) dari DOM. Callback ini merupakan tempat yang tepat untuk membersihkan data yang masih disimpan pada elemen. Bisa itu event, state, ataupun objek. 
attributeChangedCallback() : Akan terpanggil setiap kali nilai atribut yang di-observe melalui fungsi static get observedAttributes diubah. Callback ini bisa kita manfaatkan untuk memuat ulang data yang ditampilkan oleh elemen.
adoptedCallback() : Akan terpanggil setiap kali elemen dipindahkan pada dokumen baru. Kita relatif jarang menggunakan callback ini, namun jika kita memanfaatkan tag <iframe> maka callback ini akan terpanggil.

Walaupun sebenarnya constructor() bukan termasuk siklus hidup HTML Element, namun fungsi tersebut sering digunakan untuk melakukan konfigurasi awal ketika pertama kali element dibuat. Seperti menentukan event listener, atau menetapkan Shadow DOM.

Ketika kita mengimplementasikan constructor pada custom element, kita wajib memanggil method super().

Class yang merupakan custom element lebih ketat dibandingkan class lain. Kita tidak dapat membuat argument pada constructor class-nya. Karena instance dibuat tidak menggunakan keyword new seperti class JavaScript umumnya.

Terdapat dua cara membuat instance dari custom element. Yang pertama adalah menggunakan nama tagnya langsung yang dituliskan pada kode HTML.

Lalu cara kedua adalah dengan menggunakan sintaks JavaScript. Sama seperti membuat element HTML biasa, kita gunakan method document.createElement dalam membuat elemen baru.

Kita bisa mencobanya sendiri dengan menuliskan kode-kode berikut dan menjalankannya pada browser. Kemudian lihat output yang dihasilkan pada browser. Output tersebut akan menunjukan urutan siklus hidup yang terpanggil.
Implementasi lifecycle callback pada custom element bersifat opsional. Kita tidak perlu menuliskannya jika memang tidak diperlukan.
   */