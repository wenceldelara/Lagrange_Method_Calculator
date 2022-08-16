const { app, BrowserWindow } = require('electron')

function createWindow () {
    //Create the browser window
    win = new BrowserWindow({width: 800, height: 600})

    //and load the index.html
    win.loadFile('MP3.html')
}

app.on('ready', createWindow)
