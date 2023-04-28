const { app, BrowserWindow } = require('electron')

let mainWIndow = null

app.on('ready', createWindow)

function createWindow () {
  mainWIndow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWIndow.loadFile('index.html')
}
