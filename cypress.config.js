const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern:'cypress/friender/**/*.js',
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/failuer/screenshots',
    pageLoadTimeout: 60000,
  },
});
