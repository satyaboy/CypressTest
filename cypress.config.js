const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");



async function setupNodeEvents(on, config) 
{
  require('cypress-mochawesome-reporter/plugin')(on);
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  return config;


}
module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   //specPattern:'cypress/friender/**/*.js',
   //specPattern:'cypress/**/*.js',
   specPattern:'cypress/Friender/BDD/*.feature',
   setupNodeEvents,

    // setupNodeEvents(on, config) 
    // {
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/failuer/screenshots',
    pageLoadTimeout: 60000,
  },
});
