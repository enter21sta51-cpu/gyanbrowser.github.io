import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://realgyanbrowser.github.io',
  integrations: [tailwind()],
});
