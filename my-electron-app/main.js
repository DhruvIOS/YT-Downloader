const { app, BrowserWindow} = require('electron');
require('../server.js');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1920,
      height: 1080
    })
  
    win.loadURL('http://localhost:3000')
    win.focus()
  }


  app.whenReady().then(() => {
    createWindow()
  })