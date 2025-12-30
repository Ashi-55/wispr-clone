import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// @ts-expect-error process is a nodejs global (used by Tauri)
const host = process.env.TAURI_DEV_HOST;

export default defineConfig(({ mode }) => {
  // ✅ load env from project root WITHOUT process.cwd
  const env = loadEnv(mode, ".", "VITE_");

  return {
    plugins: [react()],
    envPrefix: "VITE_",

    // force inject the key (guaranteed)
    define: {
      "import.meta.env.VITE_DEEPGRAM_API_KEY": JSON.stringify(
        env.VITE_DEEPGRAM_API_KEY
      ),
    },

    clearScreen: false,

    server: {
      port: 1420,
      strictPort: true,
      host: host || false,
      hmr: host
        ? {
            protocol: "ws",
            host,
            port: 1421,
          }
        : undefined,
      watch: {
        ignored: ["**/src-tauri/**"],
      },
    },
  };
});
