import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
  },
  server: {
    host: "0.0.0.0",                   // expose to network
    port: process.env.PORT || 5173,    // support Render's dynamic port
    strictPort: true,
    origin: `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`, // required for Vite >=5
    allowedHosts: ["all"],             // 👈 this allows all hosts (useful for Render)
  },
});