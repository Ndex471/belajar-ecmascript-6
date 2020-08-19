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
 * 
 */