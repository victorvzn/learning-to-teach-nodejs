const os = require('os')

const KB_SIZE = 1024

const kb = bytes => bytes / KB_SIZE
const mb = bytes => kb(bytes) / KB_SIZE
const gb = bytes => mb(bytes) / KB_SIZE

console.log('arch', os.arch()) // x64

console.log('platform', os.platform()) // win32

console.log('cpus', os.cpus()) // [...]

console.log('cpus.length', os.cpus().length) // 12

console.log('constants', os.constants)

console.log('freemem (bytes)', os.freemem())
console.log('freemem (KB)', kb(os.freemem()))
console.log('freemem (MB)', mb(os.freemem()))
console.log('freemem (GB)', gb(os.freemem()))

console.log('totalmem (GB)', gb(os.totalmem()))

console.log('homedir', os.homedir())
console.log('tmpdir', os.tmpdir())

console.log('hostname', os.hostname())
console.log('networkInterfaces', os.networkInterfaces())
