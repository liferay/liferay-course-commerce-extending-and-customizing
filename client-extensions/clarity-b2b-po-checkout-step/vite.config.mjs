import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: resolve(__dirname, 'assets'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/jsx/index.jsx'),
            formats: ['es'],
            fileName: () => 'index.js',
        },
        rollupOptions: {
            external: [],
        },
        chunkSizeWarningLimit: 600,
    },
});