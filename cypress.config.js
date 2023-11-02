const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iejh1d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
