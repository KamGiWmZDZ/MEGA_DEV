import path from 'node:path';
import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));
const runbook = path.join(root, 'src/lib/layouts/runbook.svelte');

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter(),
      extensions: ['.svelte', '.svx'],
      alias: {
        '#lib': './src/lib',
      },
      preprocess: [
        vitePreprocess(),
        mdsvex({
          extensions: ['.svx'],
          layout: {
            runbook,
          },
        }),
      ],
      output: {
        bundleStrategy: 'inline',
      },
    }),
  ],
});
