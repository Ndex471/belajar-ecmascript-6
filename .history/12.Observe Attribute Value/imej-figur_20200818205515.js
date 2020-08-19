class ImageFigure extends HTMLElement {

    connectedCallback() {
      this.src = this.getAttribute("src") || null;
      this.alt = this.getAttribute("alt") || null;
      this.caption = this.getAttribute("caption") || null;
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <figure>
          <img src="${this.src}"
              alt="${this.alt}">
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
    }
  
    static get observedAttributes() {
      return ["caption"];
    }
  }
  
  customElements.define("image-figure", ImageFigure);
  /**
   * Ketika elemen sudah tampak pada DOM, tidak jarang kita mengganti nilai dari atributnya karena terdapat data yang perlu diperbaharui. Jika kita menggunakan elemen HTML standar, perubahan yang diterapkan akan langsung kita bisa lihat hasilnya pada browser. Namun bagaimana dengan custom element? Apakah sama? Mari kita coba bersama.

Pada contoh sebelumnya, kita telah membuat element <image-figure> yang berfungsi layaknya element <figure> dengan penggunaan yang lebih sederhana.

Lalu mari kita coba mengubah nilai atribut caption dengan nilai baru menggunakan JavaScript melalui console browser.

Pada custom element kita perlu mengimplementasi dua fungsi dalam kelasnya (ImageFigure) agar kita dapat mengobservasi nilai atribut yang berubah. Yang pertama fungsi attributeChangedCallback, dan yang kedua fungsi static get observedAttributes.

Kedua fungsi tersebut saling terhubung. Fungsi attributeChangedCallback akan terpanggil ketika nilai atribut yang diamati pada fungsi observedAttributes diubah nilainya. Kemudian pada callback fungsi attributeChangedCallback inilah kita menetapkan logika perubahan. Pada fungsi ini juga terdapat 3 (tiga) argument fungsi yang bisa dimanfaatkan yaitu:

name : Nama dari atribut yang berubah
oldValue : Nilai pada atribut sebelum diubah
newValue : Nilai baru yang ditetapkan pada atribut.
Urutan dari ketiga argumen tersebut sangatlah penting, jadi jangan sampai tertukar. Sebenarnya kita dapat memberikan nama apa saja untuk ketiga argumennya namun lebih baik gunakan name, oldValue, newValue guna memudahkan kita dalam penggunaannya.


   */