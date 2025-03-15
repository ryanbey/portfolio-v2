import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  devToolbar: { enabled: false },
  integrations: [react()],
  trailingSlash: 'never',
});