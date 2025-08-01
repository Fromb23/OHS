import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0", // required so Render can access the dev server
    port: process.env.PORT || 5173, // allow dynamic port
    strictPort: true,
    allowedHosts: ["ohs-1-z3o6.onrender.com"], // <- this is the fix
  },
});