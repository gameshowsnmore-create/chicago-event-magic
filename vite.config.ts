import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // ensures correct asset paths in production

  server: {
    host: "::",
    port: 8080,
    // Opt-in polling to avoid ENOSPC watcher limits. Enable with:
    //   CHOKIDAR_USEPOLLING=1 npm run dev
    watch: {
      usePolling: process.env.CHOKIDAR_USEPOLLING === "1" || process.env.VITE_USE_POLLING === "1",
      interval: 300,
    },
  },

  build: {
    outDir: "dist", // where Vite outputs the build
    emptyOutDir: true, // clean dist before each build
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
