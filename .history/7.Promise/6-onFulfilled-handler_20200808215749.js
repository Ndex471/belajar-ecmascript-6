const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
     if(isCoffeeMakerReady) {
       resolve("Kopi berhasil dibuat");
     } else {
       reject("Mesin Kopi tidak bisa digunakan!")
     }
   }
   
   const handlerSuccess = resolvedValue => {
    console.log(resolvedValue);
   }
   
   const makeCoffee = new Promise(executorFunction);
   makeCoffee.then(handlerSuccess)
   
   /* output:
   Kopi berhasil dibuat
   */