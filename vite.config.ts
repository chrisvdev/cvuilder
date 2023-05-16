import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc";

// vite.config.js
export default defineConfig({
    resolve: {
        alias: {
            '@': new URL('./src',import.meta.url).pathname,
        },
    },
    plugins: [react()]
})
