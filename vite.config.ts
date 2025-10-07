import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // ensures correct asset paths in production

  server: {
    host: "::",
    port: 8080,
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
