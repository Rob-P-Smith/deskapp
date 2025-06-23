import { app, BrowserWindow, ipcMain, Menu } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let appConfig = {};

async function initializeAppConfig() {
  console.log("Initializing app configuration...");

  let packageData = { name: "Desktop Application", version: "1.0.0" };
  try {
    const packagePath = path.join(__dirname, "../../../package.json");
    const packageContent = await fs.readFile(packagePath, "utf-8");
    packageData = JSON.parse(packageContent);
  } catch (error) {
    console.warn("Could not read package.json, using defaults");
  }

  appConfig = {
    name: process.env.APP_NAME || packageData.name || "Desktop Application",
    version: process.env.APP_VERSION || packageData.version || "1.0.0",
    serverUrl: process.env.SERVER_URL || "http://localhost:3000",
  };

  console.log("App config initialized:", appConfig);
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../preload/preload.cjs"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  Menu.setApplicationMenu(null);

  const isDev = process.env.NODE_ENV === "development";

  console.log("isDev:", isDev);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("__dirname:", __dirname);

  if (isDev) {
    console.log("Loading dev URL: http://localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    const htmlPath = path.join(__dirname, "../index.html");
    console.log("Loading production file:", htmlPath);

    fs.access(htmlPath)
      .then(() => {
        console.log("✅ HTML file exists");
      })
      .catch(() => {
        console.log("❌ HTML file does NOT exist");
      });

    mainWindow.loadFile(htmlPath);
  }
  return mainWindow;
};

ipcMain.handle("get-app-config", async () => {
  return appConfig;
});

ipcMain.handle("window-minimize", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  window?.minimize();
});

ipcMain.handle("window-maximize", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  if (window?.isMaximized()) {
    window.unmaximize();
  } else {
    window?.maximize();
  }
});

ipcMain.handle("window-close", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  window?.close();
});

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
    return ["file1.txt", "file2.txt", "file3.txt"];
  } catch (error) {
    throw new Error(`Failed to get recent files: ${error.message}`);
  }
});

app.whenReady().then(async () => {
  await initializeAppConfig();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
