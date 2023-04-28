function otraFuncion () {
  return serompe()
}

function serompe () {
  return 3 + z
}

function seRompeAsincrona (cb) {
  setTimeout(() => {
    try {
      return 3 + z
    } catch (err) {
      console.error('Error en mi función asíncrona')
      cb(err)
    }
  })
}

try {
  // otraFuncion()
  seRompeAsincrona((err) => {
    console.log('ERROR ASINCRONO:', err.message)
  })
} catch (err) {
  console.error('Vaya, algo se ha roto...')
  console.error('ERROR:', err)
  // console.error('ERROR:', err.message)
}

console.log('esto de aqui está al final')
