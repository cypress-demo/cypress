const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ttjycg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.cigna.com",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}"
  },
});
