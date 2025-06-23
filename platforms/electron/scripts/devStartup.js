import { spawn } from "child_process";
import { createServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../../");

function detectTerminal() {
  const term = process.env.TERM;
  const shell = process.env.SHELL;
  const msyscon = process.env.MSYSCON;
  const mingw = process.env.MINGW_PREFIX;

  if (mingw || msyscon || (shell && shell.includes("bash"))) {
    return "MINGW64";
  } else if (process.platform === "win32" && !term) {
    return "CMD";
  } else {
    return "BASH";
  }
}

function spawnElectron(terminalType, cwd, env) {
  switch (terminalType) {
    case "CMD":
      return spawn("npx", ["electron", "."], {
        stdio: "inherit",
        shell: true,
        cwd: cwd,
        env: env,
      });

    case "MINGW64":
      return spawn("npx", ["electron", "."], {
        stdio: "inherit",
        shell: true,
        cwd: cwd,
        env: env,
      });

    case "BASH":
      return spawn("npx", ["electron", "."], {
        stdio: "inherit",
        cwd: cwd,
        env: env,
      });

    default:
      throw new Error(`Unsupported terminal type: ${terminalType}`);
  }
}

async function startDev() {
  console.log("Starting Vite dev server...");
  const server = await createServer({
    configFile: path.join(projectRoot, "vite.config.ts"),
  });

  await server.listen(5173);

  console.log("✅ Vite dev server ready at http://localhost:5173");

  const terminalType = detectTerminal();
  console.log(`Detected terminal: ${terminalType}`);
  console.log("Starting Electron...");

  const electronProcess = spawnElectron(terminalType, projectRoot, {
    ...process.env,
    NODE_ENV: "development",
  });

  electronProcess.on("close", () => {
    console.log("Electron closed, shutting down Vite...");
    server.close();
    process.exit(0);
  });

  process.on("SIGINT", () => {
    console.log("Shutting down...");
    electronProcess.kill();
    server.close();
    process.exit(0);
  });
}

startDev().catch(console.error);
