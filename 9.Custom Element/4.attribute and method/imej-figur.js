class ImageFigure extends HTMLElement {

    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;

        this.innerHTML = `
        <figure>
          <img src="${this.src}"
              alt="${this.alt}">
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
      /**
       * Selain memiliki siklus hidup, class yang mewarisi sifat HTMLElement juga memiliki
properti dan method yang sama seperti objek DOM. Di mana ia memiliki properti
dan method seperti innerHTML, innerText, appendChild(), remove(), dan
sebagainya. Melalui properti dan method ini kita dapat menetapkan apa yang
harus ditampilkan atau mendapatkan nilai atribut pada custom element.
       */
    }
}

customElements.define("image-figure", ImageFigure);
/**
 * Dari kode di atas ketika element <image-figure> tampak pada DOM, maka ia
akan mendapatkan nilai yang ditetapkan pada atribut src, alt, dan caption.
Kemudian nilai atribut tersebut akan ditampilkan dalam format elemen <figure>dengan memanfaatkan innerHTML.
Untuk memberikan atribut dan nilainya pada custom element, tidak ada bedanya
dengan element HTML biasa. Kita bisa melakukannya langsung pada elemennya,
atau melalui JavaScript.

Dengan custom elemen ini kita bisa membuat elemen <figure> tanpa harus
menuliskan lagi element <img> dan <figcaption> di dalamnya. Cukup gunakan
custom elemen ini dengan menetapkan nilai atribut yang dibutuhkan. Sudah bisa
melihat kerennya custom elemen? Fungsi custom elemen bukan hanya membuat
fungsi elemen baru, namun bisa juga dibuat untuk mempermudah penggunaan
HTML yang ada.
 */