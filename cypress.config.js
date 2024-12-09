const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   // specPattern:'cypress/friender/**/*.js',
   specPattern:'cypress/**/*.js',
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/failuer/screenshots',
    pageLoadTimeout: 60000,
  },
});
