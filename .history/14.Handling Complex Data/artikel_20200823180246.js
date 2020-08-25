const article = {
    id: 1,
    title: "Lorem Ipsum Dolor",
    featuredImage: "https://picsum.photos/id/204/536/354?grayscale",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export default article;

/**
 * Seperti yang kita ketahui, nilai dari atribut pada elemen lazimnya
hanya data primitif. Namun bagaimana jika custom elemen membutuhkan data
yang kompleks atau memiliki nilai yang banyak seperti ini?

Karena pembuatan custom element ini memanfaatkan sebuah JavaScript class,
kita bisa memanfaatkan dengan menyimpan data tersebut pada properti class.
Masih ingat pembahasan properti accessor atau getter/setter? Nah, dengan
teknik ini kita dapat menetapkan data yang kompleks pada custom element.

Karena kita memanggil fungsi render() di dalam set
article(), maka custom element tidak akan menampilkan apapun pada browser
sebelum nilai article-nya ditetapkan.


 */