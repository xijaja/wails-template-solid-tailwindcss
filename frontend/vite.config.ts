import { join } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@pages': join(__dirname, "src/pages"),
      '@utils': join(__dirname, "src/utils"),
      '@components': join(__dirname, "src/components"),
    }
  }
});
