import mdx from '@mdx-js/rollup';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.md"],
  plugins: [
    {enforce: 'pre', ...mdx()},
    react({include: /\.(jsx|js|mdx|md|tsx|ts)$/})
  ],
  base: '/',
});
