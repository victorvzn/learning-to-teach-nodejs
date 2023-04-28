// console.info, console.error, console.warn

console.info('Info')
console.error('Error')
console.warn('Advertencia')

// console.table

const table = [
  { a: 1, b: 'Z' },
  { a: 2, b: 'Otra' }
]

console.log(table)
console.table(table)

// console.group

console.group('Conversación')
console.log('Hola')
console.group('Bla')
console.log('Blablabla')
console.log('Blablabla')
console.log('Blablabla')
console.groupEnd('Bla')
console.log('Adios')
console.groupEnd('Conversación')

console.log('Otra cosas de otra función')

//

function function1 () {
  console.group('function1')
  console.log('Es es de la funcion 1')
  console.log('Esto también')
  function2()
  console.log('Hemos vuelto a la funcion 1')
  console.groupEnd('funcion1')
}

function function2 () {
  console.group('funcion2')
  console.log('ahora estamos en la funcion 2')
  console.groupEnd('funcion2')
}

console.log('empezamos')
function1()

// console.count

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
