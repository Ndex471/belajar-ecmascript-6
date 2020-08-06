function gatheringIngredients(rawIngridient, callback) {
    console.log("Menyiapkan bahan ....");
    setTimeout(function() {
      if(rawIngridient) {
        const ingridient = `Bahan ${rawIngridient} sudah siap!`;
        callback(ingridient);
      }
    }, 1000)
  }
  
  function makeTheDough(ingridient, callback) {
    console.log("Membuat adonan ...." );
    setTimeout(function() {
      if(ingridient) {
        const dough = "Adonan Selesai!"
        callback(dough);
      }
    }, 2000)
  }
  
  function pourDough(dough, callback) {
    console.log("Menyiapkan adonan ke cetakan .....")
    setTimeout(function() {
      const pouredDough = "Cetakan Adonan Selesai!";
      callback(pouredDough);
    }, 1000)
  }
  
  function bakeACake(pouredDough, callback) {
    console.log("Memanggang kue ....");
    setTimeout(function() {
      const cake = "Kue sudah siap!";
      callback(cake);
    }, 3000)
  }
  
  /* callback hell terjadi di sini! */
  function makeACake(...rawIngredients) {
    gatheringIngredients(rawIngredients, function(ingridients) {
      makeTheDough(ingridients, function(dough) {
        pourDough(dough, function(pouredDough) {
          bakeACake(pouredDough, function(cake) {
            console.log(cake);
          });
        });
      });
    });
  }
  
  makeACake("Sugar", "Milk", "Butter");
  
  /* output:
  Menyiapkan bahan ....
  Membuat adonan ....
  Menyiapkan adonan ke cetakan .....
  Memanggang kue ....
  Kue sudah siap!
  */