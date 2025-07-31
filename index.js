const { app, BrowserWindow } = require('electron');
const path = require('path');

// 👇 Add this line at the top
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
