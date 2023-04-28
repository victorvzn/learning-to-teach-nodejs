/* Siempre que tengamos un callback el primer parametro deberia ser el error por que es una convension pensando en que todo puede fallar y debemos ser capaces de controlarlo */

/* throw error para funciones asincronas no va a funcionar */

function asincrona (callback) {
  setTimeout(function () {
    try {
      const a = 3 + z
      callback(null, a)
    } catch (e) {
      callback(e)
    }
  }, 1000)
}

// try {
asincrona(function (err, data) {
  if (err) {
    console.error('Tenemos un error')
    console.error(err)
    return false
    // throw err // NO VA A FUNCIONAR
  }

  console.log('Todo ha ido bien, mi data es', data)
})
// } catch (e) {
//   console.error('Hems capturado un error')
//   console.error(e)
// }
