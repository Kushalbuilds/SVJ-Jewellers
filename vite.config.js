import { defineConfig } from 'vite';
import { copyFileSync, cpSync, existsSync } from 'fs';
import { resolve } from 'path';

function copyStaticAssetsPlugin() {
  return {
    name: 'copy-svj-static-assets',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist');
      for (const file of ['items.js', 'app.js', 'style.css']) {
        const src = resolve(__dirname, file);
        if (existsSync(src)) {
          copyFileSync(src, resolve(distDir, file));
        }
      }
      const assetsSrc = resolve(__dirname, 'assets');
      if (existsSync(assetsSrc)) {
        cpSync(assetsSrc, resolve(distDir, 'assets'), { recursive: true });
      }
    }
  };
}

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  },
  plugins: [copyStaticAssetsPlugin()]
});
