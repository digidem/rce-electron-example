const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'block', (block) => ipcRenderer.invoke('block', block)
)
