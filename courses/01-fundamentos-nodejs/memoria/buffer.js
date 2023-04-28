const buffer1 = Buffer.alloc(4)
console.log(buffer1)

const buffer2 = Buffer.from([1, 2, 5])
console.log(buffer2)

const buffer3 = Buffer.from('Hola')

console.log(buffer3)
console.log(buffer3.toString())

console.log()
// Trabajando con el buffer posición a posición

const abc = Buffer.alloc(26)

console.log(abc)

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
}

console.log(abc)
console.log(abc.toString())
