const { app, BrowserWindow } = require('electron')
const path = require('path')
// const os = require('os-utils')

const createWindow = () => {

const url = "https://kinema-ms.vercel.app"

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, '/public/icon.ico'),
    // icon: __dirname + '/icon.ico',
    autoHideMenuBar: true,
    title: 'KINEMÁ',
  })
  win.loadURL(url)

  // os.cpuUsage((v) => {
  //   console.log('CPU Usage (%): ', v*100)
  //   console.log('Mem Usage (%): ', os.freememPercentage()*100)
  //   console.log('Total Usage (GB): ', os.totalmem()/1024)
  // })

  // win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})