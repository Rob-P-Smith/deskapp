import { spawn } from "child_process";
import { createServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startDev() {
  console.log("Starting Vite dev server...");

  const server = await createServer({
    root: "src",
    base: "./",
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });

  await server.listen(5173);

  console.log("✅ Vite dev server ready at http://localhost:5173");
  console.log("Starting Electron...");

  const electronProcess = spawn("cmd.exe", ["/c", "npx", "electron", "."], {
    stdio: "inherit",
    cwd: __dirname,
    env: {
      ...process.env,
      NODE_ENV: "development",
    },
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
