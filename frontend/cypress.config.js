import { defineConfig } from "cypress";

export default defineConfig({
  defaultBrowser: 'chrome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
