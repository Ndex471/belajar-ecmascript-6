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
   */