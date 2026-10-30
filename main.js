const { app, BrowserWindow } = require('electron')

const win = new BrowserWindow({
    width: 500,   
    height: 320,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')