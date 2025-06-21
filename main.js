import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const isDev = process.env.NODE_ENV === "development";
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile("dist/index.html");
  }
};

// Handle IPC calls
ipcMain.handle("save-file", async (event, { content, filepath }) => {
  try {
    await fs.writeFile(filepath, content, "utf8");
    return { success: true };
  } catch (error) {
    throw new Error(`Failed to save file: ${error.message}`);
  }
});

ipcMain.handle("load-file", async (event, filepath) => {
  try {
    const content = await fs.readFile(filepath, "utf8");
    return content;
  } catch (error) {
    throw new Error(`Failed to load file: ${error.message}`);
  }
});

ipcMain.handle("get-recent-files", async (event) => {
  try {
    // This is a placeholder - you'd implement actual recent files logic
    return ["file1.txt", "file2.txt", "file3.txt"];
  } catch (error) {
    throw new Error(`Failed to get recent files: ${error.message}`);
  }
});

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});