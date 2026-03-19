import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    server: {
        cors: {
            origin: "https://www.owlbear.rodeo",
        },
    },
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                main: resolve(
                    __dirname,
                    "index.html",
                ),
                background: resolve(
                    __dirname,
                    "background.html",
                ),
            },
        },
    },
});