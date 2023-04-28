const { exec, spawn } = require('child_process')

function ejecutaComando (comando) {
  exec(comando, (err, stdout, sterr) => {
    if (err) {
      console.log(err)
      return false
    }

    console.log(stdout)
  })
}

// ejecutaComando('ls -l')
// ejecutaComando('node --version')
// ejecutaComando('node modules/03-console.js')

const proceso = spawn('ls', ['-la'])

// console.log(proceso)
console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function (dato) {
  console.log('¿Está muerto?', process.killed)
  console.log(dato.toString())
})

proceso.on('exit', function () {
  console.log('el proceso terminó')
  console.log('¿Está muerto?', process.killed)
})
