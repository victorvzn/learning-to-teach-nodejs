const fs = require('fs')
const stream = require('stream')

let data = ''

// Streams de lectura

const readeableStream = fs.createReadStream(__dirname + '/input.txt')

readeableStream.setEncoding('UTF-8')

readeableStream.on('data', function (chunk) {
  // console.log(chunk)
  // console.log(chunk.toString())
  data += chunk
})

readeableStream.on('end', function () {
  console.log(data)
})

// Streams de escritura

console.log()

// stdout -> es un buffer de escritura

process.stdout.write('1hola') // Escribimos en el buffer de salida del sistema
process.stdout.write('2que')
process.stdout.write('3tal')

const Transform = stream.Transform

class Mayus extends Transform {
  _transform (chunk, codif, cb) {
    const chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
  }
}

const mayus = new Mayus()

readeableStream
  .pipe(mayus)
  .pipe(process.stdout)
