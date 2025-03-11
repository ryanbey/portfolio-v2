import { defineConfig } from 'astro/config';
import { partytown } from 'astro/config';

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  devToolbar: { enabled: false },
  integrations: [
    // Used to run Google Analytics tracking in a separate thread using a web worker
    partytown({ config: { forward: ['dataLayer.push'] } }),
    react(),
  ],
  trailingSlash: 'never',
});