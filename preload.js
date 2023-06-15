const { ipcRenderer } = require('electron')

window.block = (block) => ipcRenderer.invoke('block', block)
