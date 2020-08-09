function makeCoffee() {
  getCoffee()
    .then(coffee => {
      console.log(coffee)
    })
}


makeCoffee();


/* output
Coffee didapatkan!
*/