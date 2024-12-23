import { resolve } from "path";
import dts from "vite-plugin-dts";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        dts({
            rollupTypes: true
        }),
        nodePolyfills({
            exclude: [],
            globals: {
                Buffer: false,
            },
            protocolImports: true,
        }),
    ],
    resolve: {
        alias: {
            "@util/": `${resolve(__dirname, "src/util")}/`,
            "@export/": `${resolve(__dirname, "src/export")}/`,
            "@file/": `${resolve(__dirname, "src/file")}/`,
            "@shared": `${resolve(__dirname, "src/shared")}`,
        },
    },
    build: {
        minify: false,
        target: "es2015",
        lib: {
            entry: [resolve(__dirname, "src/index.ts")],
            name: "docx",
            fileName: (d) => {
                if (d === "umd") {
                    return "index.umd.js";
                }

                if (d === "cjs") {
                    return "index.cjs";
                }

                if (d === "es") {
                    return "index.mjs";
                }

                if (d === "iife") {
                    return "index.iife.js";
                }

                return "unknown";
            },
            formats: ["iife", "es", "cjs", "umd"],
        },
        outDir: resolve(__dirname, "build"),
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
    test: {
        environment: "jsdom",
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            thresholds: {
                statements: 100,
                branches: 99.68,
                functions: 100,
                lines: 100,
            },
            exclude: [
                ...configDefaults.exclude,
                '**/build/**',
                '**/demo/**',
                '**/docs/**',
                '**/scripts/**',
                '**/src/**/index.ts',
            ],
        },
        include: [
            '**/src/**/*.spec.ts',
            '**/packages/**/*.spec.ts'
        ],
        exclude: [
            ...configDefaults.exclude,
            '**/build/**',
            '**/demo/**',
            '**/docs/**',
            '**/scripts/**'
          ],
    },
});
