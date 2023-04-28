const fs = require('fs')

function leer (ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // console.log(data) // Devuelve un Buffer?
    console.log(data.toString())
  })
}

function escribir (ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error('No se ha podido escribirlo', err)
    } else {
      console.log('Se ha escrito correctamente')
    }
  })
}

function borrar (ruta, cb) {
  fs.unlink(ruta, function (err) {
    if (err) {
      console.error('No se ha podido eliminar', err)
    } else {
      console.log('Se ha eliminado correctamente')
    }
  })
}

// leer(__dirname + '/archivo.txt')
// escribir(__dirname + '/archivo2.txt', ' Soy un archivo nuevo', console.log)
borrar(__dirname + '/archivo3.txt', console.log)
