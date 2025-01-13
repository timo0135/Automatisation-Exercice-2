import { defineConfig } from 'vite';
import vitePhp from 'vite-plugin-php';

export default defineConfig({
  plugins: [vitePhp()],
  root: 'assets',
  build: {
    outDir: '../public/build',
    emptyOutDir: true,
  },
  server: {
    open: '/index.php',
  },
});