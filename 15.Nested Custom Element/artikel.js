const articles = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor",
      featuredImage: "https://picsum.photos/id/204/536/354",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  
    },
    {
      id: 2,
      title: "Lorem Ipsum Dolor",
      featuredImage: "https://picsum.photos/id/209/536/354",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  
    },
    {
      id: 3,
      title: "Lorem Ipsum Dolor",
      featuredImage: "https://picsum.photos/id/206/536/354",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  
    },
    {
      id: 4,
      title: "Lorem Ipsum Dolor",
      featuredImage: "https://picsum.photos/id/212/536/354",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  
    }
  ]
  
  export default articles;

  /**
   * Biasanya setiap daftar yang ditampilkan ditampung dalam sebuah container
<div>. Kemudian item yang sama ditampilkan secara berulang dengan data yangberbeda pada container tersebut.
Web component dapat memudahkan dalam mengorganisir daftar item yang
ditampilkan dalam bentuk list menggunakan container. Caranya kita membuat
dua custom element yatu container, dan itemnya. Container digunakan untuk
menampung elemen item di dalamnya. Selain itu pada container juga data
(array) diberikan. Nantinya container-lah yang akan membuat elemen item di
dalamnya berdasarkan data yang diberikan.

Pada kode di atas kita bisa melihat bahwa terdapat dua buah custom component
yaitu <article-list> dan <article-item>. Pada article-list.js terdapat fungsi setter
articles yang berfungsi untuk menyimpan nilai articles pada properti
this._articles.
Kemudian properti tersebut digunakan pada fungsi render() untuk ditampilkan
satu persatu melalui <article-item>.

Dengan begitu, untuk menampilkan data pada script.js akan lebih mudah. Kita
tidak perlu melakukan proses perulangan lagi di sana karena proses tersebut
langsung dilakukan ketika menggunakan element <article-list>. Kita cukup
memberikan nilai array yang akan ditampilkan.
Semakin mudah kita menggunakan sebuah element maka akan semakin baik
bukan? Walaupun terlihat agak sedikit merepotkan dalam membuatnya, perlu
Anda ingat bahwa web component ini bersifat reusable. Artinya, jika kita ingin
membuat komponen serupa, kita tidak perlu membuatnya dari awal.
   */
  