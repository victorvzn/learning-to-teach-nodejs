// console.log(global)

let i = 0

const intervalo = setInterval(() => {
  console.log('Hola')
  if (i === 3) clearInterval(intervalo)
  i++
}, 1000)

setImmediate(() => {
  console.log('Hola2')
})

console.log(process)
console.log(__dirname)
console.log(__filename)
