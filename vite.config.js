import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" : site à la racine du domaine. Pour un sous-dossier (ex. /site/), mettre base: "/site/"
export default defineConfig({ base: "/", plugins: [react()] });
