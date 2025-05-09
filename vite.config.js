import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/NovaCosplay/", // 👈 nombre del repositorio
  plugins: [react()],
});
