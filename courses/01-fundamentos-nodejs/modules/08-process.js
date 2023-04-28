// const process = require('process')

// process es global, no es necesario importarlo
// El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

process.on('beforeExit', () => {
  console.log('Victor, el proceso va a terminar!')
})

// exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
process.on('exit', () => {
  console.log('Victor, el proceso acabó!')
  setTimeout(() => {
    console.log('Esto no se va a a ver nunca, por que el proceso ya se cerró')
  }, 0)
})

// UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.
process.on('uncaughtException', (err, origin) => {
  console.error('Victor, se nos ha olvidado capturar un error!')
  console.error(err)
  setTimeout(() => {
    console.log('Esto viene de las excepciones')
  }, 0)
})

// functionQueNoExiste()

setTimeout(() => {
  console.log('Esto si se va a a ver')
}, 0)

// unhandleRejection -> captura promesas que se han rechazado

// const [, , nombres, apellido, edad] = process.argv;

// node process.js "Victor Alonso" "Ugarte" 21

// https://nodejs.org/docs/latest-v13.x/api/process.html#process_process_argv
