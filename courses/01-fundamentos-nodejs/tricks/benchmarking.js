console.time('todo')

// CONSOLE.TIME BUCLE

let suma = 0

console.time('bucle')

for (let i = 0; i < 1000000000; i++) {
  suma += 1
}

console.timeEnd('bucle')

// CONSOLE.TIME BUCLE2

let suma2 = 0

console.time('bucle2')

for (let j = 0; j < 1000000000; j++) {
  suma2 += 1
}

console.timeEnd('bucle2')

// CONSOLE.TIME ASINCRONO

console.time('asincrono')

asincrona()
  .then(() => {
    console.timeEnd('asincrono')
  })

console.timeEnd('todo')

function asincrona () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Termina el proceso asíncrono')
      resolve()
    }, 1000)
  })
}
// OTRO EJEMPLO

let suma3 = 0
let suma4 = 0

console.time('Tiempo bucle 3')
for (let i = 0; i < 1000; i++) {
  suma3++
}
console.timeEnd('Tiempo bucle 3')

console.time('Tiempo bucle 4')
for (let j = 0; j < 1000; j++) {
  suma4 = suma4 + j
}
console.timeEnd('Tiempo bucle 4')

// Tiempo bucle 3: 0.014ms
// Tiempo bucle 4: 0.012ms
