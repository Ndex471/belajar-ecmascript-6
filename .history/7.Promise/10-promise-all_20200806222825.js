const arabicaOrder = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Kopi arabika selesai!")
      }, 4000)
    })
  }
  
  const robustaOrder = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Kopi robusta selesai!")
      }, 2000)
    })
  }
  
  const libericaOrder = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Kopi liberica selesai!")
      }, 3000)
    })
  }
  
  const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];
  
  Promise.all(promises)
  .then(resolvedValue => {
    console.log(resolvedValue);
  })
  
  /* output:
  [ 'Kopi arabika selesai!',
    'Kopi robusta selesai!',
    'Kopi liberica selesai!' ]
    */